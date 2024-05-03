import dotenv from "dotenv";
dotenv.config({ path: "./src/config/.env" });

const PORT: number = Number(process.env.PORT) || 3000;
const PROTO = process.env.PROTO || "http";
const HOST = process.env.HOST || "locahost";

export { PORT, PROTO, HOST };
