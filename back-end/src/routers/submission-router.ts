import { judgeSubmission } from "@/controllers";
import { validateBody } from "@/middlewares";
import { submissionSchema } from "@/schemas";
import { Router } from "express";

const submissionsRouter = Router();

submissionsRouter
    .post('/:problemId', validateBody(submissionSchema), judgeSubmission)

export { submissionsRouter };