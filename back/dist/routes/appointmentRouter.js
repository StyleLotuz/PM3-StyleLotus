"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointmentController_1 = require("../controllers/appointmentController");
var appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", appointmentController_1.getAppointment);
appointmentRouter.post("/schedule", appointmentController_1.scheduleAppointment);
appointmentRouter.put("/cancel", appointmentController_1.cancelAppointment);
exports.default = appointmentRouter;
