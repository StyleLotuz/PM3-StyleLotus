import IUser from "./IUser"

enum EStatus{
    Active,
    Cancelled
}

interface IAppointment {
    id: number,
    date: Date,
    time: string,
    userId: IUser,
    status: EStatus
}

export default IAppointment