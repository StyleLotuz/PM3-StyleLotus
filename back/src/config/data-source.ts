import { DataSource } from "typeorm";
import { Credential } from "../entities/Credential";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456789",
    database: "relish_db",
    synchronize: true,
    logging: true,
    entities: [Credential, Appointment, User],
    subscribers: [],
    migrations: [],
})

export const UserModel = AppDataSource.getRepository(User)
export const CredentialModel = AppDataSource.getRepository(Credential)
export const AppointmentModel = AppDataSource.getRepository(Appointment)
