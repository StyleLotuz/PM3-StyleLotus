import ICredential from "../interfaces/ICredential";
let id = 0;
const usersCredentials: ICredential[] = [];

const createNewCredentials = async (
  username: string,
  password: string
): Promise<ICredential> => {
  id++;
  const newCredentials: ICredential = { id, username, password };
  usersCredentials.push(newCredentials);
  return newCredentials;
};

const checkCredentials = async (
  username: string,
  password: string
): Promise<number | null> => {
  for (const credential of usersCredentials) {
    if (credential.username === username && credential.password === password) {
      return credential.id;
    }
  }
  return null;
};

export { createNewCredentials, checkCredentials };
