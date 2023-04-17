import problemsRepositories from "@/repositories/problems-repositories";
import fs from "fs";
import { evaluateSolution } from "@/solution";
import { problemNotFound } from "./errors";

async function createSolutionEnviroment(code: string, problemId: number) {

    try {
        await fs.writeFileSync('./solution.cpp', code);

        const testCases = await problemsRepositories.getTestCases(problemId);
        if(!testCases.length)
            throw problemNotFound();

        testCases.forEach(async(value) => {
            await fs.writeFileSync('./' + value.name, value.file.toString());
        })

        const problemDetails = await problemsRepositories.getProblemDetails(problemId);
        await fs.writeFileSync('./config.txt', `${problemDetails.seconds_limit} ${problemDetails.mb_memory_limit}`);

        return evaluateSolution();
    }
    catch(e) {
        console.log('Impossible to create solution enviroment');
        console.log(e);
        throw e;
    }
}

const submissionServices = {
    createSolutionEnviroment
};

export default submissionServices;