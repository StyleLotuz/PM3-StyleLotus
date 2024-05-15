import { useState, useEffect } from "react";
import Modal from "react-modal";
import styles from './Modal.module.css'
import validate from "../../../../helpers/validateModal";
import getFormattedDate from "../../../../helpers/getFormattedDate";
import axios from 'axios'
import { useSelector, useDispatch  } from "react-redux";
import { setUserAppointments } from "../../../../redux/appointmentReducer";

export default function MyModal({ isOpen, openModal, closeModal }) {
 
    const userId = useSelector(state => state.user.userId)
    const userAppointments = useSelector(state => state.user.userAppointments)
    const dispatch = useDispatch()

    const [appointmentData, setAppointmentData] = useState({
        date: '',
        time: '',
        description: ''
    })    

    const [errors, setErrors] = useState({})
    useEffect(() => {
        Modal.setAppElement('#root');
    }, []);

    const handleChange = (e) => {
        const {name, value} = e.target
    
        setAppointmentData({
            ...appointmentData, [name]: value
        })
        const validateErrors = validate({...appointmentData, [name]: value})
        setErrors(validateErrors)
    }
   
    const handleSubmit = async () => {
        try {
            const infoToSend = {
                ...appointmentData,
                userID: userId
            };
            const response = await axios.post('http://localhost:3000/appointments/schedule', infoToSend);
            dispatch(setUserAppointments([...userAppointments, response.data]));
            closeModal();
        } catch (error) {
            console.error('Hubo un error al crear la cita:', error);
        }
    };

    const sendable = Object.values(errors).every(value => !value) && Object.values(appointmentData).every(value => value !== '');

    return (
        <div>
            <Modal
                className={styles.modalContent}
                overlayClassName={styles.overlay}
                isOpen={isOpen}
                onRequestClose={closeModal}>
                <h2>Select time, date and description</h2>
                <input name="time"  min="08:00" max="18:00" className={styles.inputField} type="time" value={appointmentData.time} onChange={handleChange} />
                {errors.time && <span className={styles.error}>{errors.time}</span>}
                
                <input name="date" className={styles.inputField} type="date" value={appointmentData.date} onChange={handleChange} min={getFormattedDate()}/>
                {errors.date && <span className={styles.error}>{errors.date}</span> }
                
                <textarea name="description" className={styles.textareaField} value={appointmentData.description} onChange={handleChange} />
                {errors.description && <span className={styles.error}>{errors.description}</span>}
                
                <button disabled={!sendable} className={styles.button} onClick={handleSubmit}>Guardar</button>
            </Modal>
        </div>
    );
}