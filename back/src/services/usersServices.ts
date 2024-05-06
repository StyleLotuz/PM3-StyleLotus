import { CredentialModel, UserModel } from "../config/data-source";
import CredentialDto from "../dto/credentialsDto";
import UserDto from "../dto/userDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";
import IUser from "../interfaces/IUser";
import { createNewCredentials } from "./credentialsServices";

const getAllUsersService = async (): Promise<User[]> => {
  const users = await UserModel.find();
  return users;
};

const getUserByIdService = async (id: number): Promise<User | null> => {
  const user = await UserModel.findOneBy({ id });
  return user;
};

const createNewUserService = async (userData: UserDto) => {
  const credentialsData: CredentialDto = {
    username: userData.username,
    password: userData.password,
  };

  
  const newCredential = CredentialModel.create(credentialsData);
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

export { getAllUsersService, getUserByIdService, createNewUserService };
