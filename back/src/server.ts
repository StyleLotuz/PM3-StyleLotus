import express from "express";
import router from "./routes/indexRouter";
import morgan from "morgan";

const server = express();
server.use(morgan("tiny"));

server.use(router);

export default server;
