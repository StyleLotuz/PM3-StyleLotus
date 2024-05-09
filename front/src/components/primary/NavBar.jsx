import React from 'react'
import Logo from '../../assets/imgs/RelishLogo.png'
import JoinUsBtn from '../secundary/JoinUsBtn'
import SignUpBtn from '../secundary/SignUpBtn'
import styles from '../../assets/styles/navbar.module.css'

export default function NavBar() {
    return (
        <>
            <nav style={styles.nav}>
                <img src={Logo} style={styles.img} alt="Logo Relish" />
                <ul style={styles.ul}>
                    <a href="" style={styles.li}><li>HOME</li></a>
                    <a href="" style={styles.li}><li>ABOUT US</li></a>
                    <a href="" style={styles.li}><li>CONTACT</li></a>
                </ul>
                <div style={styles.div}>
                        <JoinUsBtn />
                        <SignUpBtn />
                    </div>
            </nav>
        </>
    )
}
