import { EStatus } from "./statusEnum";

interface IAppointment {
  id: number;
  date: Date;
  time: string;
  userId: number;
  description: string;
  status: EStatus;
}

export default IAppointment;
