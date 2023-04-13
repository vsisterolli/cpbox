import problemsRepositories from "@/repositories/problems-repositories";
import { Problem, TestCases } from "@/types/problems";
import decompress from "decompress";
import path from "path";
import { forbiddenName, invalidExtension, missingMatchesOrEmptyCases, testsSizeExceeded } from "./errors";

async function checkProblem(problem: Problem) {
    if(problem.tests.size > 4000000)
        throw testsSizeExceeded();

    problem.mb_memory_limit = Number(problem.mb_memory_limit);
    problem.seconds_limit = Number(problem.seconds_limit);

    const decompressedTests: TestCases[] = await decompressTests(problem.tests.buffer);
    delete problem.tests;

    await problemsRepositories.createProblem({...problem, test_cases: decompressedTests});
}

async function decompressTests(tests: ArrayBuffer | Buffer) {
    try {
        const files = await decompress(tests as Buffer, "solution");
        const databaseTestPattern: TestCases[] = [];
        files.map(file => {

            if(file.path === "a.out")
                throw forbiddenName();

            if(path.extname(file.path) !== '.in' && path.extname(file.path) !== '.out')
                throw invalidExtension();

            databaseTestPattern.push({
                name: file.path,
                file: file.data
            });
        })

        if(!databaseTestPattern.length || databaseTestPattern.length % 2)
            throw missingMatchesOrEmptyCases();

        return databaseTestPattern;
    }
    catch(e) {
        console.log(e.message);
        throw e;
    }
}

const problemsServices = {
    checkProblem
};

export default problemsServices;