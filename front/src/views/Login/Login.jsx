import React, { useState, useEffect } from 'react'
import styles from './Login.module.css'
import validate from '../../helpers/validateLogin'
import axios from 'axios'
import { setUserId } from '../../redux/appointmentReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [errors, setErrors] = useState({})
    const [submittedText, setSubmittedText] = useState('')
    const [userData, setUserData] = useState({
        name: '',
        password: ''
    })
    const dispatch = useDispatch()
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target

        setUserData({
            ...userData, [name]: value
        })

        const validateErrors = validate({ ...userData, [name]: value })
        setErrors(validateErrors)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await axios.post('http://localhost:3000/users/login', userData)
            dispatch(setUserId(data.data.user.id))
            setSubmittedText('Login successfully')
            setTimeout(() => {
                setSubmittedText('')
            }, 5000)
            navigate("/Home")
        } catch (error) {
            setSubmittedText('Login not submitted')
            setTimeout(() => {
                setSubmittedText('')
            }, 5000)
        }
    }

    const formIsValid = Object.keys(errors).length === 0 && Object.keys(errors).every(value => value !== '')

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label>Username: </label>
                <input className={styles.input} type="text" name="username" id="username" onChange={handleChange} />
                {errors.username && <p className={styles.error}>{errors.username}</p>}

                <label>Password: </label>
                <input className={styles.input} type="password" name="password" id="password" onChange={handleChange} />
                {errors.password && <p className={styles.error}>{errors.password}</p>}

                <button type="submit" disabled={!formIsValid}>LOGIN</button>
                {submittedText && <p className={styles.login}>{submittedText}</p>}
            </form>
        </div>
    )
}