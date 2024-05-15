import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { EStatus } from "../interfaces/statusEnum";
import { User } from "./User";

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  time: string;

  @Column()
  description: string;

  @Column()
  status: EStatus;

  @ManyToOne(()=>User, (user) => user.appointments)
  user: User;
}
