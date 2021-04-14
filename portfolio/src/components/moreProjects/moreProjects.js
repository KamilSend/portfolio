import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './moreProjects.module.scss'

import kartka from '../../assets/img/ekartkaDesktop.jpg'
import backgroundImg from "../../assets/img/laguna.jpg";

import { AiFillCloseCircle } from 'react-icons/ai';


const moreProjects = () => {
    return(
        <>
            <section id="resume" className={styles.moreProjects}>
                <NavLink to="/"><AiFillCloseCircle className={styles.closeIcon}/></NavLink>
                <article className={styles.projectArticle}>
                    <img src={kartka} alt="e-kartka z Warszawy" className={styles.projectImg}/>
                    <div className={styles.projectWrapper}>
                        <h3 className={styles.projectTitle}>Krótki tytuł</h3>
                        <p className={styles.projectText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet harum hic maiores pariatur sequi voluptatem? Consequuntur cum dolore,
                            dolorem enim quae quis reiciendis tempora voluptates. Dicta iste,
                            perferendis! Architecto, recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet harum hic maiores pariatur sequi voluptatem? Consequuntur cum dolore,
                            dolorem enim quae quis reiciendis tempora voluptates. Dicta iste,
                            perferendis! Architecto, recusandae.
                        </p>
                        <h4 className={styles.projectTechnology}>Główne technologie:</h4>
                        <ul className={styles.projectList}>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </article>

                <article className={styles.projectArticle}>
                    <div className={styles.projectWrapper}>
                        <h3 className={styles.projectTitle}>Krótki tytuł</h3>
                        <p className={styles.projectText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet harum hic maiores pariatur sequi voluptatem? Consequuntur cum dolore,
                            dolorem enim quae quis reiciendis tempora voluptates. Dicta iste,
                            perferendis! Architecto, recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet harum hic maiores pariatur sequi voluptatem? Consequuntur cum dolore,
                            dolorem enim quae quis reiciendis tempora voluptates. Dicta iste,
                            perferendis! Architecto, recusandae.
                        </p>
                        <h4 className={styles.projectTechnology}>Główne technologie:</h4>
                        <ul className={styles.projectList}>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                    <img src={kartka} alt="e-kartka z Warszawy" className={styles.projectImg}/>
                </article>

                <article className={styles.projectArticle}>
                    <img src={kartka} alt="e-kartka z Warszawy" className={styles.projectImg}/>
                    <div className={styles.projectWrapper}>
                        <h3 className={styles.projectTitle}>Krótki tytuł</h3>
                        <p className={styles.projectText}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet harum hic maiores pariatur sequi voluptatem? Consequuntur cum dolore,
                            dolorem enim quae quis reiciendis tempora voluptates. Dicta iste,
                            perferendis! Architecto, recusandae.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Amet harum hic maiores pariatur sequi voluptatem? Consequuntur cum dolore,
                            dolorem enim quae quis reiciendis tempora voluptates. Dicta iste,
                            perferendis! Architecto, recusandae.
                        </p>
                        <h4 className={styles.projectTechnology}>Główne technologie:</h4>
                        <ul className={styles.projectList}>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </article>
            </section>
            <img src={backgroundImg} alt="background image" className={styles.homeImg}/>
        </>

    )
}

export default moreProjects