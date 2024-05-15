import React from 'react'
import Logo from '../../assets/imgs/RelishLogo.png'
import JoinUsBtn from '../secundary/JoinUsBtn'
import SignUpBtn from '../secundary/SignUpBtn'
import styles from '../../assets/styles/navbar.module.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LogoutBtn from '../secundary/LogoutBtn'

export default function NavBar() {

    const userId = useSelector(state => state.user.userId)

    return (
        <>
            <nav className={styles.nav}>
                <img src={Logo} className={styles.img} alt="Logo Relish" />
                <ul className={styles.ul}>
                    <NavLink to='/home' className={styles.li}>HOME</NavLink>
                    <NavLink to='/about' className={styles.li}>ABOUT</NavLink>
                    <NavLink to='/menu' className={styles.li}>MENU</NavLink>
                    {userId && <NavLink to='/myAppointments' className={styles.li}>MY APPOINTMENTS</NavLink>}
                </ul>
                <div className={styles.div}>
                    {!userId && <Link to="/register"><JoinUsBtn /></Link>}
                    {!userId && <Link to="/login"><SignUpBtn /></Link>}
                    {userId && <LogoutBtn/>}
                </div>
            </nav>
        </>
    )
}
