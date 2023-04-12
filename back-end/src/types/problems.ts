import { problems } from "@prisma/client"

type ProblemCreateParams = Omit<problems, 'id' | 'tests'>;

interface Problem extends ProblemCreateParams {
    id?: number,
    tests: File & Buffer
}

export default Problem;