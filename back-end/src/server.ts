import express, { Express } from 'express';
import cors from 'cors';
import { problemsRouter, submissionsRouter } from '@/routers';

const server = express();

server
    .use(cors())
    .use(express.json())
    .use('/problems', problemsRouter)
    .use('/submissions', submissionsRouter);
server.listen(5000, () => {
    console.log("App is running at port 5000!");
})