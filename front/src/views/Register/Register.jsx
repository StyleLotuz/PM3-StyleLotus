import React, { useState } from 'react'
import styles from './Register.module.css'
import validate from '../../helpers/validateRegister'

export default function Register() {
    const [errors, setErrors] = useState({})

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        birthdate: '',
        ndni: '',
        username: '', 
        password: '',
        repassword: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })

        const validateErrors = validate({ ...userData, [name]: value })
        setErrors(validateErrors)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const isFormValid = Object.keys(errors).length === 0 && Object.keys(userData).every(value => value !== '')

    return (
        <div>
            <form className={styles.form}>
                <label>Enter your Name: </label>
                <input className={styles.input} onChange={handleChange} type="text" name="name" value={userData.name} />
                {errors.name && <p className={styles.error}>{errors.name}</p>}

                <label>Create your username: </label>
                <input className={styles.input} onChange={handleChange} type="text" name="username" value={userData.username} />
                {errors.username && <p className={styles.error}>{errors.username}</p>}

                <label>Enter your Email: </label>
                <input className={styles.input} onChange={handleChange} type="text" name="email" value={userData.email} />
                {errors.email && <p className={styles.error}>{errors.email}</p>}

                <label>Your date of birthdate: </label>
                <input className={styles.input} onChange={handleChange} type="date" name="birthdate" value={userData.birthdate} />
                {errors.birthdate && <p className={styles.error}>{errors.birthdate}</p>}

                <label>Enter your ID document: </label>
                <input className={styles.input} onChange={handleChange} type="number" name="nDni" value={userData.ndni} />

                <label>Create a password: </label>
                <input className={styles.input} onChange={handleChange} type="password" name="password" value={userData.password} />
                {errors.password && <p className={styles.error}>{errors.password}</p>}

                <label>Confirm your password: </label>
                <input className={styles.input} onChange={handleChange} type="password" name="repassword" value={userData.repassword} />
                {errors.repassword && <p className={styles.error}>{errors.repassword}</p>}

                <button type="submit" disabled={!isFormValid} className={styles.sendBtn}>READY TO JOIN</button>
            </form>
        </div>
    )
}