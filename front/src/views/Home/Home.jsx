import React from 'react'
import styles from './Home.module.css'
import homeImg from '../../assets/imgs/Home.png'
import HomeVideo from '../../components/secundary/HomeVideo/HomeVideo'

export default function Home() {
    return (
        <div className={styles.width}>
            <HomeVideo/>
            <div className={styles.container}>
                <div className={styles.imageContainer}>
                    <img src={homeImg} alt="Descripción de la imagen" className={styles.image} />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.text}>Embark on a gastronomic journey around the world and discover new flavors and textures that will surprise you with every bite.</p>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.text}>Immerse yourself in the authenticity of international cuisine and let yourself be seduced by the aromas and colors that will transport you to distant places without leaving your home.</p>
                </div>
            </div>
        </div>
    )
}
