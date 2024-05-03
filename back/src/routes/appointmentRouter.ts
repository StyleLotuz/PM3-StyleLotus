import { Router } from "express";
import { cancelAppointment, getAppointment, scheduleAppointment, getAllAppointments } from "../controllers/appointmentController";

const appointmentRouter = Router();

appointmentRouter.get("/", getAllAppointments);
appointmentRouter.get("/:id", getAppointment);
appointmentRouter.post("/schedule", scheduleAppointment);
appointmentRouter.put("/cancel", cancelAppointment);

export default appointmentRouter;
