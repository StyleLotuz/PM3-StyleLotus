"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointmentsController_1 = require("../controllers/appointmentsController");
var appointmentsRouter = (0, express_1.Router)();
appointmentsRouter.get("/", appointmentsController_1.getAppointments);
exports.default = appointmentsRouter;
