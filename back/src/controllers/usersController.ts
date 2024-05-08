import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByIdService,
  createNewUserService,
  loginUserService,
} from "../services/usersServices";
import { CredentialModel } from "../config/data-source";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  res.status(200).json(users);

};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdService(Number(id));
    res.status(200).json(user);
  } catch {
    res.status(404).json({ message: "El usuario no fue encontrado" })
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser = await createNewUserService({ name, email, birthdate, nDni, username, password });
    console.log(newUser);
    res.status(201).json(newUser);
  } catch {
    res.status(400).json({ message: 'Los datos son incorrectos' })
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await loginUserService({ username, password });
    res.status(200).json({ login: true, user });
  } catch (error) {
    res.status(400).json({ message: 'Ha habido un error al encontrar el usuario' });
  }
};
