import React from 'react'
import Logo from '../../assets/imgs/RelishLogo.png'
import JoinUsBtn from '../secundary/JoinUsBtn'
import SignUpBtn from '../secundary/SignUpBtn'
import styles from '../../assets/styles/navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <nav style={styles.nav}>
                <img src={Logo} style={styles.img} alt="Logo Relish" />
                <ul style={styles.ul}>
                    <NavLink to='/home' style={styles.li}>HOME</NavLink>
                    <NavLink to='/about' style={styles.li}>ABOUT</NavLink>
                    <NavLink to='/contact' style={styles.li}>CONTACT</NavLink>
                    <NavLink to='/myAppointments' style={styles.li}>MY APPOINTMENTS</NavLink>
                </ul>
                <div style={styles.div}>
                    <Link to="/register"><JoinUsBtn /></Link>
                    <Link to="/login"><SignUpBtn /></Link>
                </div>
            </nav>
        </>
    )
}
