import { Router } from "express";
import { getAppointments } from "../controllers/appointmentsController";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAppointments);

export default appointmentsRouter;
