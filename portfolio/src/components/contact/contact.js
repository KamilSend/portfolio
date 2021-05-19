import React from 'react'

import styles from './contact.module.scss'

import envelope from '../../assets/img/envelope5.png'

const contact = () => {
    return(
        <section  name="contact" id="contact" className={styles.contact}>
                <img src={envelope} alt="email" className={styles.envelope}/>
                <p className={styles.name}>
                        Kamil Sendecki
                </p>
                <p className={styles.mail}>
                    <a href="mailto:kontakt@kamilsendecki.pl" target="_blank" rel="noopener noreferrer">
                        kontakt@kamilsendecki.pl
                    </a>
                </p>
                <p className={styles.phone}>
                    <a  href="tel:48794144373" target="_blank" rel="noopener noreferrer">
                        +48 794 144 373
                    </a>
                </p>
        </section>
    )
}

export default contact