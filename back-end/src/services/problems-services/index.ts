import problemsRepositories from "@/repositories/problems-repositories";
import { Problem, TestCases } from "@/types/problems";
import decompress from "decompress";

async function checkProblem(problem: Problem) {
    if(problem.tests.size > 4000000)
        throw 'testsSizeExceeded';

    problem.mb_memory_limit = Number(problem.mb_memory_limit);
    problem.seconds_limit = Number(problem.seconds_limit);

    const tests = problem.tests.buffer
    delete problem.tests;
    
    const { id } = await problemsRepositories.createProblem(problem);
    await decompressTests(tests, id);
}

async function decompressTests(tests: ArrayBuffer | Buffer, problemId: number) {
    try {
        const files = await decompress(tests as Buffer, "solution");
        const databaseTestPattern: TestCases[] = [];
        files.map(file => {
            databaseTestPattern.push({
                name: file.path,
                problem_id: problemId,
                file: file.data
            });
            console.log(file);
        })
        await problemsRepositories.createTestCases(databaseTestPattern);
    }
    catch(e) {
        console.log(e.message);
    }
}

const problemsServices = {
    checkProblem
};

export default problemsServices;