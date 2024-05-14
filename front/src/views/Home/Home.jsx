import React from 'react'
import styles from './Home.module.css'
import homeImg from '../../assets/imgs/Home.png'

export default function Home() {
    return (
        <div className={styles.width}>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={homeImg} alt="Descripción de la imagen" className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.text}>Embárcate en un viaje gastronómico alrededor del mundo y descubre nuevos sabores y texturas que te sorprenderán en cada bocado.</p>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.text}>Sumérgete en la autenticidad de la cocina internacional y déjate seducir por los aromas y colores que te transportarán a lugares lejanos sin salir de tu hogar.</p>
                </div>
            </div>
        </div>
    )
}
