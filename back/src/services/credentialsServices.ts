import { CredentialModel, UserModel } from "../config/data-source";
import CredentialDto from "../dto/credentialsDto";
import { Credential } from "../entities/Credential";
import { User } from "../entities/User";
import ICredential from "../interfaces/ICredential";

const createNewCredentials = async (
  credentialData: CredentialDto
): Promise<Credential> => {
  const newCredential = await CredentialModel.create(credentialData);
  const result = await CredentialModel.save(newCredential);
  return result;
};

const checkCredentials = async ({
  username,
  password
}: ICredential): Promise<User | null> => {
  try {
    const credential = await CredentialModel.findOneBy({ username })
    if (!credential) throw new Error('Credenciales invalidas')
    if (password !== credential.password) throw new Error('Credenciales invalidas')
    const user = await UserModel.findOneBy({credentials: credential})
  return user
  } catch (error: any) {
    throw new Error(error)
  }
};

export { createNewCredentials, checkCredentials };
