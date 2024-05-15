import { error, log } from "console";
import { AppDataSource, AppointmentModel, UserModel } from "../config/data-source";
import appointmentDto from "../dto/appointmentDto";
import { Appointment } from "../entities/Appointment";
import { EStatus } from "../interfaces/statusEnum";

const getAllAppointmentsService = async () => {
  const appointments = await AppointmentModel.find();
  if(appointments.length > 0)  return appointments;
  throw new Error('No hay citas disponibles')
};

const getAppointmentByIdService = async (
  id: number
): Promise<Appointment> => {
  const appointment = await AppointmentModel.findOneBy({ id });
  if (!appointment) throw new Error('No se encontro el turno solicitado')
  return appointment;
};

const createNewAppointmentService = async (
  appointmentData: appointmentDto
): Promise<Appointment> => {
  const queryRunner = AppDataSource.createQueryRunner()  
  try {
    await queryRunner.connect()

    await queryRunner.startTransaction()

    const newAppointment = await AppointmentModel.create(appointmentData)
    await queryRunner.manager.save(newAppointment)

    const user = await UserModel.findOneBy({ id: appointmentData.userID })
    if (user) {
      newAppointment.user = user
      await queryRunner.manager.save(newAppointment)
    }

    await queryRunner.commitTransaction()

    return newAppointment
  } catch (error) {
    await queryRunner.rollbackTransaction()
    throw error
  } finally {
    await queryRunner.release()
  }
};

const cancelAppointmentService = async (id: number) => {
  const appointment = await AppointmentModel.findOneBy({ id });
  if (appointment) {
    appointment.status = EStatus.CANCELLED;
    await AppointmentModel.save(appointment);
  }else{
    throw new Error('No se ha encontrado la cita a cancelar')
  }
};

export {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createNewAppointmentService,
  cancelAppointmentService,
};
