import React, { useEffect, useState } from "react";
import Appointment from "../../components/secundary/Appointment/Appointment";
import styles from "./myAppointments.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import MyModal from "../../components/secundary/Appointment/Modal/Modal";
import { setUserAppointments } from "../../redux/appointmentReducer";
import { useLocation, useNavigate } from 'react-router-dom';

export default function MyAppointments() {
    const userId = useSelector(state => state.user.userId);
    const userAppointments = useSelector(state => state.user.userAppointments)
    const dispatch = useDispatch()
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const location = useLocation()
    const navigate = useNavigate()

    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    useEffect(() => {
        if (!userId) {
            navigate('/home');
        } else {
            axios.get(`http://localhost:3000/users/${userId}`).then((response) => {
                dispatch(setUserAppointments(response.data.appointments))
            })
        }
    }, [userId, dispatch]);

    return (
        <div className={styles.box}>
            <MyModal isOpen={modalIsOpen} openModal={openModal} closeModal={closeModal}/>
            <button className={styles.addBtn} onClick={openModal}>ADD AN APPOINTMENT</button>
            {userAppointments.length > 0 ? (
                userAppointments.map((appointment) => (
                    <Appointment key={appointment.id} id={appointment.id} date={appointment?.date} time={appointment?.time} status={appointment?.status} description={appointment?.description}/>
                ))
            ) : (
                <div className={styles.noAppointmentText}>There are no appointments allowed at this time. What are you waiting for?</div>
            )}
        </div>
    );
}