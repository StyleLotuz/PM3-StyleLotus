"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var indexRouter_1 = __importDefault(require("./routes/indexRouter"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use((0, morgan_1.default)("dev"));
server.use(express_1.default.json());
server.use(indexRouter_1.default);
server.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).json({ error: 'Este es el error' });
});
exports.default = server;
