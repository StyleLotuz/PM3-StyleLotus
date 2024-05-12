import React from 'react'
import styles from './Login.module.css' 

export default function Login() {
    return (
        <div>
            <form className={styles.form}>
                <label>Username: </label>
                <input className={styles.input} type="text" name="username" id="username" />
                <label>Password: </label>
                <input className={styles.input} type="password" name="password" id="password" />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    )
}