import { Request, Response } from "express";
import {
  cancelAppointmentService,
  createNewAppointmentService,
  getAllAppointmentsService,
  getAppointmentByIdService,
} from "../services/appointmentsServices";
import { EStatus } from "../interfaces/statusEnum";

export const getAllAppointments = async (req: Request, res: Response) => {
  try {
    const appointments = await getAllAppointmentsService();
    res.status(200).json(appointments);
  } catch {
    res.status(404).json({ message: "No se encontraron turnos." })
  }
};

export const getAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    res.status(200).json(appointment);
  } catch {
    res.status(404).json({ message: 'El turno no fue encontrado' })
  }
};

export const scheduleAppointment = async (req: Request, res: Response) => {
  try {
    const { date, time, userID, description } = req.body;
    const status = EStatus.ACTIVE
    const newAppointment = await createNewAppointmentService({ date, time, status, description, userID });
    res.status(201).json(newAppointment);
  } catch {
    console.log('Hola');
    res.status(400).json({ message: 'Los datos son incorrectos' })
  }
};

export const cancelAppointment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await cancelAppointmentService(Number(id));
    res.status(200).json({ message: "Se ha cancelado la cita" });
  } catch {
    res.status(404).json({ message: 'No se encontraron turnos' })
  }
};

