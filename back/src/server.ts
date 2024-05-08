import express, { NextFunction, Request, Response } from "express";
import router from "./routes/indexRouter";
import morgan from "morgan";
import cors from "cors"

const server = express();

server.use(cors())
server.use(morgan("dev"));
server.use(express.json());

server.use(router);

server.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'Este es el error' });
});


export default server;
