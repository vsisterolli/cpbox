import { Request, Response } from "express";
import submissionServices from "@/services/submission-services";

export async function judgeSubmission(req: Request, res: Response) {
    try {
        const { code } = req.body;
        const { problemId } = req.params;
        await submissionServices.createSolutionEnviroment(code, Number(problemId))       
        res.sendStatus(200);
    }
    catch(e) {
        console.log(e.message);
        res.status(500).send(e.message);
    }
}