import React from 'react'
import { NavLink } from "react-router-dom";
// import { Switch, Route } from 'react-router-dom';
import { Link, Route } from "wouter";

import Skills from "./skills/skills";

import styles from './about.module.scss'

import face from '../../assets/img/foto_mini.jpg';
import MoreProjects from "../moreProjects/moreProjects";

import { FiDownload } from 'react-icons/fi'


const about = () => {
    return(
        <section id="about" name="about" className={styles.about}>
            <div className={styles.aboutHeader}>
                <img src={face} alt="Kamil Sendecki photo" className={styles.facePhoto}/>
                <h2 className={styles.aboutTitle}>Umiejętności</h2>
            </div>


            <article className={styles.aboutTile}>
                <Skills/>
            </article>


                    {/*<Experience/>*/}
                    {/*<Education/>*/}


            {/*<article className={styles.aboutArticle}></article>*/}

            {/*<a href="#" className={styles.resumeLink}>Download resume <FiDownload/></a>*/}
        </section>
    )
}

export default about