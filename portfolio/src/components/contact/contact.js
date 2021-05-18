import React from 'react'

import styles from './contact.module.scss'

import envelope from '../../assets/img/envelope4.png'

const contact = () => {
    return(
        <section  name="contact" id="contact" className={styles.contact}>
            <a href="mailto:kontakt@kamilsendecki.pl" className={styles.contactLink} target="_blank" rel="noopener">
                <img src={envelope} alt="email" className={styles.envelope}/>
            </a>
        </section>
    )
}

export default contact