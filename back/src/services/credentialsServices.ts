import { CredentialModel } from "../config/data-source";
import CredentialDto from "../dto/credentialsDto";
import { Credential } from "../entities/Credential";

const createNewCredentials = async (
  credentialData: CredentialDto
): Promise<Credential> => {
  const newCredential = await CredentialModel.create(credentialData);
  const result = await CredentialModel.save(newCredential);
  return result;
};

const checkCredentials = async (
  username: string,
  password: string
): Promise<Credential | null> => {
  const checkedUser = CredentialModel.findOneBy({username, password})
  if(checkedUser) return checkedUser
  else return null
};

export { createNewCredentials, checkCredentials };
