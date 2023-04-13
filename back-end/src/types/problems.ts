import { problems, test_cases } from "@prisma/client";

type ProblemCreateParams = Omit<problems, 'id' | 'tests'>;

interface Problem extends ProblemCreateParams {
    id?: number,
    tests: File & Buffer
    test_cases: TestCases[]
}

type TestCasesCreateParams = Omit<test_cases, 'id' | 'problem_id'>

interface TestCases extends TestCasesCreateParams {
    id?: number,
    file: Buffer
}

export {
    TestCases,
    Problem
}