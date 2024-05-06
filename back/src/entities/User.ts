import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appointment } from "./Appointment";

@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string
    
    email: string
    @Column()
    
    @Column()
    birthdate: Date

    @Column()
    ndni: number

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential

    @OneToMany(()=>Appointment, (appointment) => appointment.userId)
    appoitments: Appointment[]
}