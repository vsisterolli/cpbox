import { createProblem } from "@/controllers";
import { validateBody } from "@/middlewares";
import { problemSchema } from "@/schemas";
import { Router } from "express";
import multer from "multer";

const upload = multer();
const problemsRouter = Router();

problemsRouter
    .post('', upload.single('tests'), validateBody(problemSchema), createProblem);

export { problemsRouter };