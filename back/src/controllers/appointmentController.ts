import { Request, Response } from "express";
import {
  cancelAppointmentService,
  createNewAppointmentService,
  getAllAppointmentsService,
  getAppointmentByIdService,
} from "../services/appointmentsServices";

export const getAllAppointments = async (req: Request, res: Response) => {
  const appointments = await getAllAppointmentsService;
  res.status(200).json(appointments);
};

export const getAppointment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const appointment = await getAppointmentByIdService(Number(id));
  res.status(200).json(appointment);
};

export const scheduleAppointment = async (req: Request, res: Response) => {
  const { date, time, userId } = req.body;
  await createNewAppointmentService(date, time, userId);
  res.status(201).json({ message: "La cita ha sido creada" });
};

export const cancelAppointment = async (req: Request, res: Response) => {
  const { id } = req.body;
  await cancelAppointmentService(id);
  res.status(200).json({ message: "Se ha cancelado la cita" });
};
