import React from 'react'

import styles from './skills.module.scss'

import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaWordpress, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiJquery, SiGimp, SiInkscape } from 'react-icons/si'

import { Icon, InlineIcon } from '@iconify/react';
import cypressIcon from '@iconify-icons/logos/cypress';



const skills = () => {
    return(
        <article className={styles.skillsArticle}>
            <h3 className={styles.skillsTile}>Main:</h3>
            <div className={styles.skillsTile}>
                <FaHtml5 title="HTML 5"/>
                <FaCss3Alt title="CSS 3"/>
                <FaSass  title="Sass"/>
                <SiJavascript  title="JavaScript"/>
                <FaReact  title="ReactJS"/>
                <FaBootstrap  title="Bootstrap"/>
            </div>
            <h3  className={styles.skillsTile}>Other:</h3>
            <div className={styles.skillsTile}>
                <SiJquery title="jQuery"/>
                <FaWordpress title="Wordpress"/>
                <FaGitAlt title="GIT"/>
                <SiGimp title="GIMP"/>
                <SiInkscape title="Inkscape"/>
                <span title="Cypress"><Icon icon={cypressIcon}  /></span>
            </div>

        </article>
    )
}

export default skills