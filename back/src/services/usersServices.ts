import { UserModel } from "../config/data-source";
import CredentialDto from "../dto/credentialsDto";
import UserDto from "../dto/userDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import { createNewCredentials } from "./credentialsServices";

const getAllUsersService = async (): Promise<User[]> => {
  const users = UserModel.find();
  return users;
};

const getUserByIdService = async (id: number): Promise<User | null> => {
  const user = UserModel.findOneBy({ id });
  return user;
};

const createNewUserService = async (userData: UserDto ) => {
   // Crear nuevas credenciales y obtener su ID
   const credentialsData: CredentialDto = {
    username: userData.username,
    password: userData.password
  };
 
  const newUser = UserModel.create({...userData, credentialsId: credentialsData.id})
  const result = UserModel.save(newUser)
  return result
};

export { getAllUsersService, getUserByIdService, createNewUserService };
