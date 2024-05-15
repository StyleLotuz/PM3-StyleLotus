import React from 'react'
import styles from './HomeVideo.module.css'
import video from '../../../assets/videos/VideoH.mp4'

export default function HomeVideo() {
    return (
        <div>
            <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
    )
}
