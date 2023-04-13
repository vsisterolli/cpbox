import problemsRepositories from "@/repositories/problems-repositories";
import fs from "fs";

async function createSolutionEnviroment(code: string, problemId: number) {
    try {
        await fs.writeFileSync('./src/solution/testcode.cpp', code);

        const testCases = await problemsRepositories.getTestCases(problemId);
        if(!testCases.length)
            throw 'problemNotFound';

        testCases.forEach(async(value) => {
            await fs.writeFileSync('./src/solution/' + value.name, value.file.toString());
        })

        return evaluateSolution(testCases.length / 2);
    }
    catch(e) {
        console.log('Impossible to create solution enviroment');
        throw e;
    }
}

const submissionServices = {
    createSolutionEnviroment
};

export default submissionServices;