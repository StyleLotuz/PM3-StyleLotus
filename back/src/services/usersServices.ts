import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import { createNewCredentials } from "./credentialsServices";

const users: IUser[] = [];
let id = 0;

const getAllUsersService = async (): Promise<IUser[]> => {
  return users;
};

const getUserByIdService = async (id: number): Promise<IUser | null> => {
  for (const user of users) {
    if (user.id === id) return user;
  }
  return null;
};

const createNewUserService = async (
  name: string,
  email: string,
  birthdate: Date,
  nDni: number,
  username: string,
  password: string
) => {
  id++;
  const credentials: ICredential = await createNewCredentials(
    username,
    password
  );
  const newUser: IUser = {
    id,
    name,
    email,
    birthdate,
    nDni,
    credentialsId: credentials.id,
  };
  users.push(newUser)
  return newUser;
};

export { getAllUsersService, getUserByIdService, createNewUserService };
