import IAppointment from "../interfaces/IAppointment";
import { EStatus } from "../interfaces/statusEnum";

const appointments: IAppointment[] = [];
let id = 0;

const getAllAppointmentsService = async () => {
  return appointments;
};

const getAppointmentByIdService = async (
  id: number
): Promise<IAppointment | null> => {
  for (const appointment of appointments) {
    if (appointment.id === id) return appointment;
  }
  return null;
};

const createNewAppointmentService = async (
  date: Date,
  time: string,
  userId: number
): Promise<IAppointment | null> => {
  if (!userId) {
    console.error("Hubo no se ha proporcionado el id del turno");
    return null;
  }

  id++;
  const status = EStatus.ACTIVE;
  const newAppointment: IAppointment = { id, date, time, userId, status };
  return newAppointment;
};

const cancelAppointmentService = async (id: number) => {
  for (const appointment of appointments) {
    if (appointment.id === id) {
      appointment.status = EStatus.CANCELLED;
    }
  }
};

export {
  getAllAppointmentsService,
  getAppointmentByIdService,
  createNewAppointmentService,
  cancelAppointmentService,
};
