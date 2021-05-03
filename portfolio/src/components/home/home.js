import React from 'react'

import styles from './home.module.scss'

import { SiLinkedin, SiGithub } from 'react-icons/si'

const home = () => {
    return(
        <section  name="home" id="home" className={styles.home}>
            <h1 className={styles.mainTitle}>Kamil Sendecki</h1>
            <h1 className={styles.titleSecondary}>Web developer</h1>
            <p className={styles.socialWrapper}>
                <a href="https://github.com/KamilSend"><SiLinkedin title="LinkedIn"/></a>
                <a href="https://www.linkedin.com/in/kamil-sendecki-99742983/"><SiGithub title="Github"/></a>
            </p>
        </section>
    )
}

export default home