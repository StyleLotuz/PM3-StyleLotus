import { Request, Response } from "express";

export const getAppointments = (req: Request, res: Response) => {
	res.status(201).json({ message: " Obtener el listado de todos los turnos de todos los usuarios." });
};
