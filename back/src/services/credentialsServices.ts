import ICredential from "../interfaces/ICredential"
let id = 0;

const createNewCredentials = ({ username, password }) =>{
    id++; 
    let newCredentials = {username, password}
    ICredential()
}

export = { createNewCredentials}