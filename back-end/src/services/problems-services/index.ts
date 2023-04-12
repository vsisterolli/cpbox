import problemsRepositories from "@/repositories/problems-repositories";
import Problem from "@/types/problems";

async function checkProblem(problem: Problem) {
    if(problem.tests.size > 4000000)
        throw 'testsSizeExceeded';

    problem.mb_memory_limit = Number(problem.mb_memory_limit);
    problem.seconds_limit = Number(problem.seconds_limit);
    console.log(problem.tests);
    await problemsRepositories.createProblem(problem);
}


const problemsServices = {
    checkProblem
};

export default problemsServices;