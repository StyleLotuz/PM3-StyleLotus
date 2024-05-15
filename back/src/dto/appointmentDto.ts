import { EStatus } from "../interfaces/statusEnum"

interface appointmentDto{
    date: Date,
    time: string,
    status: EStatus.ACTIVE,
    userID: number, 
    description: string
}

export default appointmentDto