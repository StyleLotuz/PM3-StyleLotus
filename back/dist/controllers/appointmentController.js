"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.scheduleAppointment = exports.getAppointment = void 0;
var getAppointment = function (req, res) {
    res.status(201).json({ message: "Obtener el detalle de un turno específico." });
};
exports.getAppointment = getAppointment;
var scheduleAppointment = function (req, res) {
    res.status(200).json({ message: "Agendar un nuevo turno." });
};
exports.scheduleAppointment = scheduleAppointment;
var cancelAppointment = function (req, res) {
    res.status(200).json({ message: "Cambiar el estatus de un turno a “cancelled”." });
};
exports.cancelAppointment = cancelAppointment;
