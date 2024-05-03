import { EStatus } from "./statusEnum";

interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  status: EStatus;
}

export default IAppointment;
