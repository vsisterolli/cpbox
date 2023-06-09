import prisma from '@/config/prisma';
import { Problem, TestCases } from "@/types/problems";

async function createProblem(problem: Problem) {
    
    const test_cases = problem.test_cases;
    return await prisma.problems.create({
        data: {
            ...problem,
            test_cases: {
                createMany: {
                    data: test_cases
                }
            }
        }
    });
}

async function getProblemDetails(problem_id: number) {
    return await prisma.problems.findFirst({
        select: {
            seconds_limit: true,
            mb_memory_limit: true
        },
        where: {
            id: problem_id
        },
    })
}

async function getTestCases(problem_id: number) {
    return await prisma.test_cases.findMany({
        where: {
            problem_id
        }
    })
}

const problemsRepositories = {
    createProblem,
    getTestCases,
    getProblemDetails
}

export default problemsRepositories;