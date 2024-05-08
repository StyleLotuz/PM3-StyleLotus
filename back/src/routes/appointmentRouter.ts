import { Router } from "express";
import { getAllAppointments, getAppointment, scheduleAppointment, cancelAppointment } from "../controllers/appointmentController";
import { validateAppointmentData } from "../middlewares/validateDataAppointment";

const appointmentRouter = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointment);
appointmentRouter.post("/schedule", validateAppointmentData, scheduleAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);

export default appointmentRouter;
