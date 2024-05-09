import React from 'react'
import styles from './Appointment.module.css'

export default function Appointment({ date, time, status }) {
    return (
        <div className={styles.container}>
            <span>{date}</span>
            <span>{time}</span>
            <span>{status}</span>
        </div>
    )
}
