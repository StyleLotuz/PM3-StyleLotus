import { Request, Response } from "express";
import {
  getAllUsersService,
  getUserByIdService,
  createNewUserService,
} from "../services/usersServices";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getAllUsersService();
  res.status(200).json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdService(Number(id));
  res.status(200).json(user);
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, birthdate, nDni, username, password } = req.body;
  const newUser = await createNewUserService({name, email, birthdate, nDni, username, password});
  console.log(newUser);
  res.status(201).json(newUser);
};

export const loginUser = async (req: Request, res: Response) => {
  res.status(200).json({ message: "In Progress" });
};
