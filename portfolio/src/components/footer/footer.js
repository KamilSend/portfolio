import React from 'react'

import { SiLinkedin, SiGithub } from 'react-icons/si'

import styles from './footer.module.scss'

const footer = () => {
    return(
        <section className={styles.footer}>
            <p className={styles.socialFooterWrapper}>
                <a href="https://www.linkedin.com/in/kamil-sendecki-99742983/"><SiLinkedin title="LinkedIn"/></a>
                <a href="https://github.com/KamilSend"><SiGithub title="Github"/></a>
            </p>
            <p>Copyright 2021 - Sendecki Kamil</p>
        </section>
    )
}

export default footer