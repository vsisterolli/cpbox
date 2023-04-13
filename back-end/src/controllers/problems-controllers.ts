import { Response } from 'express';
import MulterRequest from "@/types/requests";
import problemsServices from "@/services/problems-services";

export async function createProblem(req: MulterRequest, res: Response) {
    const problem = req.body;
    if(!req.file)
        res.status(400).send("Missing tests");

    problem.tests = req.file;
    try {
        await problemsServices.checkProblem(problem);
        res.sendStatus(201);
    }
    catch(e) {
        if(e.name === 'testsSizeExceeded' || e.name === 'InvalidExtension' || e.name === 'Missing Matches Or Empty Cases')
            res.status(400).send(e)
        else res.status(500).send(e);
    }
}