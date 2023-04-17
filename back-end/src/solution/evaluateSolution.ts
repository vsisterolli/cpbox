import { exec } from "child_process";
import util from "util";
import fs from "fs";

export async function evaluateSolution() {
    let result: string;

    const promiseExec = util.promisify(exec);
    const promiseUnlink = util.promisify(fs.unlink);
    const promiseRead = util.promisify(fs.readdir);

    const baseFolder = ['Dockerfile', 'index.ts', 'testSolution.cpp', 'solution.cpp', 'evaluateSolution.ts'];

    try {
        await promiseExec('docker build -t judge .');
        const {stdout, stderr} = await promiseExec('docker run judge');

        try {
            const files = await promiseRead('.');
            files.forEach(value => {
                if(!baseFolder.includes(value))
                    promiseUnlink('./' + value);
            })
        }
        catch(e) {
            console.log("Failed to delete files");
            console.log(e);
        }
        
        return stdout;
    }
    catch(e) {
        console.log(e);
    }

}   