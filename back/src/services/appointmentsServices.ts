import { AppointmentModel } from "../config/data-source";
import appointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";
import { EStatus } from "../interfaces/statusEnum";

const getAllAppointmentsService = async () => {
  const appointments = await AppointmentModel.find();
  return appointments;
};

const getAppointmentByIdService = async (
  id: number
): Promise<Appointment | null> => {
  const appointment = AppointmentModel.findOneBy({ id });
  return appointment;
};

const createNewAppointmentService = async (
  appointmentData: appointmentDto
): Promise<Appointment | null> => {
  const appointment = await AppointmentModel.create(appointmentData);
  const result = await AppointmentModel.save(appointment);
  return result;
};

const cancelAppointmentService = async (id: number) => {
  const appointment = await AppointmentModel.findOneBy({id})
  if(appointment){
    appointment.status = EStatus.CANCELLED
    await AppointmentModel.save(appointment)
  }
};

export {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createNewAppointmentService,
  cancelAppointmentService,
};
