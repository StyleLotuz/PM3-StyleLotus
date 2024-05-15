import React from 'react'
import styles from './Appointment.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAppointments } from '../../../redux/appointmentReducer'
import axios from 'axios'

export default function Appointment({ id, date, time, status, description }) {

    const dispatch = useDispatch()
    const userId = useSelector(state => state.user.userId)

    const cancelAppointment = async (id) => {
        try {
            await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
            const response = await axios.get(`http://localhost:3000/users/${userId}`)
            dispatch(setUserAppointments(response.data.appointments))
        } catch (error) {
            console.log('Hubo un error al intentar cancelar la tarea');
        }
    }


    return (
        <div className={styles.container}>
            <span>{date}</span>
            <span>{time}</span>
            <span>{status}</span>
            <span>{description}</span>
            <button className={status === 'CANCELLED' ? styles.disabled : ''} disabled={status === 'CANCELLED'} onClick={() => cancelAppointment(id)}>{status === 'CANCELLED' ? 'CANCELLED' : 'CANCEL'}</button>
        </div>
    )
}
