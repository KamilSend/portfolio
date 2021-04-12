import React from 'react'

import styles from './home.module.scss'

import { SiLinkedin, SiGithub } from 'react-icons/si'
import { FaCodepen} from 'react-icons/fa'

import backgroundImg from '../../assets/img/laguna.jpg';
import name from '../../assets/img/imie.png'

const home = () => {
    return(
        <section id="home" className={styles.home}>
            <img src={backgroundImg} alt="background image" className={styles.homeImg}/>
            <div className={styles.imgOverlay}></div>
            <h1 className={styles.mainTitle}>Kamil Sendecki</h1>
            <img src={name} alt="Kamil Sendecki" className={styles.name}/>
            <h1 className={styles.titleSecondary}>Web developer</h1>
            <p className={styles.socialWrapper}>
                <SiLinkedin title="LinkedIn"/>
                <SiGithub title="Github"/>
                <FaCodepen title="Codepen"/>
            </p>
        </section>
    )
}

export default home