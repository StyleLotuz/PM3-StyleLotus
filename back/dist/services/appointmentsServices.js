"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointmentService = exports.createNewAppointmentService = exports.getAppointmentByIdService = exports.getAllAppointmentsService = void 0;
var data_source_1 = require("../config/data-source");
var statusEnum_1 = require("../interfaces/statusEnum");
var getAllAppointmentsService = function () { return __awaiter(void 0, void 0, void 0, function () {
    var appointments;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.AppointmentModel.find()];
            case 1:
                appointments = _a.sent();
                if (appointments.length > 0)
                    return [2, appointments];
                throw new Error('No hay citas disponibles');
        }
    });
}); };
exports.getAllAppointmentsService = getAllAppointmentsService;
var getAppointmentByIdService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var appointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.AppointmentModel.findOneBy({ id: id })];
            case 1:
                appointment = _a.sent();
                if (!appointment)
                    throw new Error('No se encontro el turno solicitado');
                return [2, appointment];
        }
    });
}); };
exports.getAppointmentByIdService = getAppointmentByIdService;
var createNewAppointmentService = function (appointmentData) { return __awaiter(void 0, void 0, void 0, function () {
    var queryRunner, newAppointment, user, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                queryRunner = data_source_1.AppDataSource.createQueryRunner();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 10, 12, 14]);
                return [4, queryRunner.connect()];
            case 2:
                _a.sent();
                return [4, queryRunner.startTransaction()];
            case 3:
                _a.sent();
                return [4, data_source_1.AppointmentModel.create(appointmentData)];
            case 4:
                newAppointment = _a.sent();
                return [4, queryRunner.manager.save(newAppointment)];
            case 5:
                _a.sent();
                return [4, data_source_1.UserModel.findOneBy({ id: appointmentData.userID })];
            case 6:
                user = _a.sent();
                if (!user) return [3, 8];
                newAppointment.user = user;
                return [4, queryRunner.manager.save(newAppointment)];
            case 7:
                _a.sent();
                _a.label = 8;
            case 8: return [4, queryRunner.commitTransaction()];
            case 9:
                _a.sent();
                return [2, newAppointment];
            case 10:
                error_1 = _a.sent();
                return [4, queryRunner.rollbackTransaction()];
            case 11:
                _a.sent();
                throw error_1;
            case 12: return [4, queryRunner.release()];
            case 13:
                _a.sent();
                return [7];
            case 14: return [2];
        }
    });
}); };
exports.createNewAppointmentService = createNewAppointmentService;
var cancelAppointmentService = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var appointment;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, data_source_1.AppointmentModel.findOneBy({ id: id })];
            case 1:
                appointment = _a.sent();
                if (!appointment) return [3, 3];
                appointment.status = statusEnum_1.EStatus.CANCELLED;
                return [4, data_source_1.AppointmentModel.save(appointment)];
            case 2:
                _a.sent();
                return [3, 4];
            case 3: throw new Error('No se ha encontrado la cita a cancelar');
            case 4: return [2];
        }
    });
}); };
exports.cancelAppointmentService = cancelAppointmentService;
