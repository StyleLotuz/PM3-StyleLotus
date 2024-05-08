"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentModel = exports.CredentialModel = exports.UserModel = exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var Credential_1 = require("../entities/Credential");
var Appointment_1 = require("../entities/Appointment");
var User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456789",
    database: "relish_db",
    synchronize: true,
    logging: true,
    entities: [Credential_1.Credential, Appointment_1.Appointment, User_1.User],
    subscribers: [],
    migrations: [],
});
exports.UserModel = exports.AppDataSource.getRepository(User_1.User);
exports.CredentialModel = exports.AppDataSource.getRepository(Credential_1.Credential);
exports.AppointmentModel = exports.AppDataSource.getRepository(Appointment_1.Appointment);
