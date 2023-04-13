import prisma from '@/config/prisma';
import { Problem, TestCases } from "@/types/problems";

async function createProblem(problem: Problem) {
    return await prisma.problems.create({
        data: {
            ...problem
        }
    });
}

async function createTestCases(tests: TestCases[]) {
    return await prisma.test_cases.createMany({
        data: tests
    })
}

const problemsRepositories = {
    createProblem,
    createTestCases
}

export default problemsRepositories;