#include <iostream>
#include <string>
#include <cstdio>
#include <fstream> 

int main() {
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
            std::cerr << "Failed to compile solution.cpp" << std::endl;
            continue;
        }
        
        // Run a.out command with input from .in file and output to .out file
        std::string runCmd = "./a.out < " + inFile + " > " + ansFile;
        int runStatus = system(runCmd.c_str());
        if (runStatus != 0) {
            std::cerr << "Failed to run a.out" << std::endl;
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

        if (correct) {
            std::cout << "C";
        } else {
            std::cout << "W";
        }
    }
     
    return 0;
}
