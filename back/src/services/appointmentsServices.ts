import { AppointmentModel, UserModel } from "../config/data-source";
import appointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";
import { EStatus } from "../interfaces/statusEnum";

const getAllAppointmentsService = async () => {
  const appointments = await AppointmentModel.find();
  console.log(appointments);
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
  const newAppointment = await AppointmentModel.create(appointmentData);
  await AppointmentModel.save(newAppointment);

  const user = await UserModel.findOneBy({id: appointmentData.userID})

  if(user){
    newAppointment.user = user;
    AppointmentModel.save(newAppointment)
  }

  return newAppointment
};

const cancelAppointmentService = async (id: number) => {
  const appointment = await AppointmentModel.findOneBy({ id });
  if (appointment) {
    appointment.status = EStatus.CANCELLED;
    await AppointmentModel.save(appointment);
  }
};

export {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createNewAppointmentService,
  cancelAppointmentService,
};
