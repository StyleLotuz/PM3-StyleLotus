import React from 'react';
import Logo from '../../../assets/imgs/RelishLogo.png';
import styles from './footer.module.css';
import GitHub from '../../../assets/imgs/GitHub.png'
import Instagram from '../../../assets/imgs/Instagram.png'
import Linkedin from '../../../assets/imgs/Linkedin.png'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoContainer}>
                <img src={Logo} className={styles.logo} alt="Logo Relish" />
            </div>
            <div className={styles.buttons}>
                <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt="GitHub" className={styles.logo}/></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt="Instagram" className={styles.logo}/></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin"className={styles.logo} /></a>
            </div>
        </footer>
    )
}