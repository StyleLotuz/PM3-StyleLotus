import { Credential } from './../entities/Credential';
import { CredentialModel, UserModel } from "../config/data-source";
import CredentialDto from "../dto/credentialsDto";
import UserDto from "../dto/userDto";
import { User } from "../entities/User";
import { checkCredentials } from "./credentialsServices";
import ICredential from '../interfaces/ICredential';

const getAllUsersService = async (): Promise<User[]> => {
  const users = await UserModel.find({ relations: ["appointments"] });
  return users;
};

const getUserByIdService = async (id: number): Promise<User> => {
  const user = await UserModel.findOneBy({ id });
  if (!user) throw new Error('Usuario no encontrado')
  return user;
};

const createNewUserService = async (userData: UserDto) => {
  const credentialsData: CredentialDto = {
    username: userData.username,
    password: userData.password,
  };

  const newCredential = await CredentialModel.create(credentialsData);
  await CredentialModel.save(newCredential);

  const newUser = UserModel.create({
    name: userData.name,
    email: userData.email,
    birthdate: userData.birthdate,
    ndni: userData.nDni,
    credentials: newCredential
  });

  const result = await UserModel.save(newUser);
  return result;
};

const loginUserService = async (credentials: ICredential) => {
  try {
    return await checkCredentials(credentials)
  } catch (error: any) {
    throw new Error(error)
  }
}

export { getAllUsersService, getUserByIdService, createNewUserService, loginUserService };
