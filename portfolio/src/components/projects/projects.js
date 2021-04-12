import React from 'react'
import { NavLink } from 'react-router-dom';

import { CgArrowTopRightR } from 'react-icons/cg'

import styles from './projects.module.scss'

import budujnaturalnie from '../../assets/img/budujnaturalnie.jpg'
import natours from '../../assets/img/natours.jpg'
import soup from '../../assets/img/soup.jpg'

const projects = () => {
    return(
        <section id="projects" className={styles.projects}>
            <h2 className={styles.projectsTitle}>Projects</h2>
            <div className={styles.imgContainer}>
                <img src={budujnaturalnie} alt="budujnaturalnie" className={styles.projectsImg}/>
                <img src={natours} alt="budujnaturalnie" className={styles.projectsImg}/>
                <img src={soup} alt="budujnaturalnie" className={styles.projectsImg}/>
            </div>
            <NavLink to="/moreProjects" className={styles.projectsLink}>See more projects <CgArrowTopRightR/></NavLink>

        </section>
    )
}

export default projects