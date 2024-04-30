import { Router } from "express";
import usersRouter from "./usersRouter";
import appointmentRouter from "./appointmentRouter";
import appointmentsRouter from "./appointmentsRouter";

const router: Router = Router();

router.use("/users", usersRouter);
router.use("/appointment", appointmentRouter);
router.use("/appointments", appointmentsRouter);

export default router;
