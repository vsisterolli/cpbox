import express, { Express } from 'express';
import cors from 'cors';
import { problemsRouter } from './routers';
import { handleApplicationErrors } from '@/middlewares';

const server = express();

server
    .use(cors())
    .use(express.json())
    .use('/problems', problemsRouter)
    .use(handleApplicationErrors);

server.listen(5000, () => {
    console.log("App is running at port 5000!");
})