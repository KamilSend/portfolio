import React from 'react'

import { SiLinkedin, SiGithub } from 'react-icons/si'
import { FaCodepen} from 'react-icons/fa'

import styles from './footer.module.scss'

const footer = () => {
    return(
        <section className={styles.footer}>
            <p className={styles.socialFooterWrapper}>
                <SiLinkedin title="LinkedIn"/>
                <SiGithub title="Github"/>
                <FaCodepen title="Codepen"/>
            </p>
            <p>Copyright 2021 - Sendecki Kamil</p>
        </section>
    )
}

export default footer