import React from 'react'

import styles from './home.module.scss'

import { SiLinkedin, SiGithub } from 'react-icons/si'
import { FaCodepen} from 'react-icons/fa'

const home = () => {
    return(
        <section  name="home" id="home" className={styles.home}>
            <h1 className={styles.mainTitle}>Kamil Sendecki</h1>
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