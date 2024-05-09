import React, { useState } from 'react'
import { appointments } from '../../helpers/myAppointments'
import Appointment from '../../components/secundary/Appointment/Appointment'
import styles from "./myAppointments.module.css"

export default function () {
    const [citas, setCitas] = useState(appointments)

    return (
        <div className={styles.container}>
            {citas.map((cita) => (
                <Appointment key={cita.id}
                    date={cita.date}
                    time={cita.time}
                    status={cita.status}
                />
            ))}
        </div>
    )
}
