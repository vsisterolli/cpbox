import { Response } from 'express';
import MulterRequest from "@/types/requests";
import problemsServices from "@/services/problems-services";

export async function createProblem(req: MulterRequest, res: Response) {
    const problem = req.body;
    if(!req.file)
        res.status(400).send("Missing tests");

    problem.tests = req.file.buffer;
    try {
        await problemsServices.checkProblem(problem);
        res.sendStatus(201);
    }
    catch(e) {
        if(e.name === 'testsSizeExceeded')
            res.status(400).send("Tests sizes are too large")
        else res.status(500).send(e.message.details);
        console.log(e);
    }
}