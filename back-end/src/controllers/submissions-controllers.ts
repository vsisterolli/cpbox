import { Request, Response } from "express";
import submissionServices from "@/services/submission-services";

export async function judgeSubmission(req: Request, res: Response) {
    try {
        const { code } = req.body;
        const { problemId } = req.params;
        const result = await submissionServices.createSolutionEnviroment(code, Number(problemId))       
        res.send(result);
    }
    catch(e) {
        if(e.name === "Problem Not Found")
            return res.status(404).send(e.name);    
        
        console.log(e.name);
        res.status(500).send(e.message);
    }
}