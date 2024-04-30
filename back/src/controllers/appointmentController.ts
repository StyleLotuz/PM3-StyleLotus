import { Request, Response } from "express";

export const getAppointment = (req: Request, res: Response) => {
	res.status(201).json({ message: "Obtener el detalle de un turno específico." });
};

export const scheduleAppointment = (req: Request, res: Response) => {
	res.status(200).json({ message: "Agendar un nuevo turno." });
};

export const cancelAppointment = (req: Request, res: Response) => {
	res.status(200).json({ message: "Cambiar el estatus de un turno a “cancelled”." });
};
