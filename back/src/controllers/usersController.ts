import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
	res.status(201).json({ message: "Obtener el listado de todos los usuarios." });
};

export const getUserById = async (req: Request, res: Response) => {
	res.status(201).json({ message: "Obtener el detalle de un usuario específico" });
};

export const registerUser = (req: Request, res: Response) => {
	res.status(200).json({ message: "Registro de un nuevo usuario." });
};

export const loginUser = (req: Request, res: Response) => {
	res.status(200).json({ message: "Login del usuario a la aplicación." });
};
