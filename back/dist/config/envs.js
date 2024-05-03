"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOST = exports.PROTO = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: "./src/config/.env" });
var PORT = Number(process.env.PORT) || 3000;
exports.PORT = PORT;
var PROTO = process.env.PROTO || "http";
exports.PROTO = PROTO;
var HOST = process.env.HOST || "locahost";
exports.HOST = HOST;
