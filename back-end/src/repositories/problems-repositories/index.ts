import prisma from '@/config/prisma';
import Problem from "@/types/problems";

async function createProblem(problem: Problem) {
    await prisma.problems.create({
        data: {
            ...problem
        }
    });
}

const problemsRepositories = {
    createProblem
}

export default problemsRepositories;