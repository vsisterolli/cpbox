#include <iostream>
#include <string>
#include <cstdio>
#include <fstream> 
#include <algorithm>

int main() {

    std::ifstream configStream("config.txt");
    std::string number1;
    double number2;
    if (configStream.is_open()) {
        // Read the two numbers from the file
        configStream >> number1 >> number2;

        // Check if the numbers were read successfully
        if (configStream.fail()) {
            std::cerr << "Failed to read numbers from config.txt!" << std::endl;
            configStream.close();
            return 1;
        }

        configStream.close(); // Close the file
    } else {
        std::cerr << "Failed to open config.txt for reading!" << std::endl;
        return 1;
    }

    std::string command = "find . -type f -name \"*.in\" | wc -l";
    char buffer[128];
    std::string result = "";
    
    FILE* pipe = popen(command.c_str(), "r");
    if (pipe == nullptr) {
        std::cerr << "Failed to execute command: " << command << std::endl;
        return 1;
    }
    
    while (fgets(buffer, sizeof(buffer), pipe) != nullptr) {
        result += buffer;
    }
    
    int status = pclose(pipe);
    if (status == -1) {
        std::cerr << "Failed to close pipe" << std::endl;
        return 1;
    }
    
    if (!result.empty() && result.back() == '\n') 
        result.pop_back();
    
    int numFiles = std::stoi(result);
    
    for(int i = 1; i <= numFiles; i++) {
        std::string inFile = std::to_string(i) + ".in";
        std::string ansFile = std::to_string(i) + ".ans";
        std::string outFile = std::to_string(i) + ".out";
        
        // Run g++ command
        std::string compileCmd = "g++ solution.cpp";
        int compileStatus = system(compileCmd.c_str());
        if (compileStatus != 0) {
            std::cout << "C";
            continue;
        }
        
        // Run a.out command with input from .in file and output to .out file
        std::string runCmd = "timeout -s SIGTERM " + number1 + " valgrind --leak-check=full --log-file=valgrind.log ./a.out < " + inFile + " > " + ansFile + " RETVAL=$?";
        int runStatus = WEXITSTATUS(system(runCmd.c_str()));
        if (runStatus == 124) {
            std::cout << "T";
            continue;
        }
        else if(runStatus != 0) {
            std::cout << "R";
            continue;
        }
        
        // Read contents of .ans and .out files
        std::ifstream ansStream(ansFile);
        std::ifstream outStream(outFile);
        std::string ansContent((std::istreambuf_iterator<char>(ansStream)), std::istreambuf_iterator<char>());
        std::string outContent((std::istreambuf_iterator<char>(outStream)), std::istreambuf_iterator<char>());
        

        bool correct = true;
        for(int i = 0, j = 0; i < ansContent.size() && j < outContent.size(); i++, j++) {
            while(i < ansContent.size() && (ansContent[i] == ' ' || ansContent[i] == '\t' || ansContent[i] == '\n'))
                i++;
            while(j < outContent.size() && (outContent[j] == ' ' || outContent[j] == '\t' || outContent[j] == '\n'))
                j++;
            
            if(i < ansContent.size() && (j >= outContent.size() || ansContent[i] != outContent[j])) {
                correct = false;
                break;
            }

            if(j < ansContent.size() && (i >= outContent.size() || ansContent[i] != outContent[j])) {
                correct = false;
                break;
            }

        }
        
        std::ifstream valgrindStream("valgrind.log");
        std::string line;
        std::string memoryUsed;
        long long int bytes = 0;
        while (std::getline(valgrindStream, line)) {
            size_t found = line.find("total heap usage:");
            if (found != std::string::npos) {
                memoryUsed = line.substr(found);
                size_t allocsPos = memoryUsed.find(":");
                size_t bytesPos = memoryUsed.find("bytes");
                memoryUsed = memoryUsed.substr(allocsPos + 2, bytesPos - allocsPos - 2);
                memoryUsed.erase(std::remove_if(memoryUsed.begin(), memoryUsed.end(), [](char c) { return c == ','; }), memoryUsed.end()); // Remove commas from the number

                long long int pot = 1;
                bool found = false;
                for(int k = memoryUsed.size() - 1; k >= 0 || !found; k--) {
                    if(memoryUsed[k] < '0' || memoryUsed[k] > '9') {
                        if(found)
                            break;
                        else
                            continue;
                    }
                    found = true;
                    bytes += pot * (memoryUsed[k] - '0');
                    pot *= 10;
                }
                break;
            }
        }


        if(bytes > 1048576 * number2) {
            std::cout << "M";
            continue; 
        }

        if (correct) {
            std::cout << "A";
        } else {
            std::cout << "W";
        }
    }
    std::cout << std::endl;
    return 0;
}
