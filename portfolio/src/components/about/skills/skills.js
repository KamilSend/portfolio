import React from 'react'
import ReactTooltip from 'react-tooltip';

import styles from './skills.module.scss'

import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaBootstrap, FaWordpress, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiJquery, SiGimp, SiInkscape } from 'react-icons/si'

import { Icon, InlineIcon } from '@iconify/react';
import cypressIcon from '@iconify-icons/logos/cypress';



const skills = () => {
    return(
        <article className={styles.skillsArticle}>
            <h3 className={styles.skillsTile}>Główne:</h3>
            <div className={styles.skillsTile}>
                <FaHtml5 data-tip="HTML 5" />
                <FaCss3Alt data-tip="CSS 3"/>
                <FaSass data-tip="Sass"/>
                <SiJavascript data-tip="JavaScript"/>
                <FaReact data-tip="ReactJS"/>
                <FaBootstrap data-tip="Bootstrap"/>
            </div>
            <h3  className={styles.skillsTile}>Inne:</h3>
            <div className={styles.skillsTile}>
                <SiJquery data-tip="jQuery" />
                <FaWordpress data-tip="Wordpress"/>
                <FaGitAlt data-tip="GIT" />
                <SiGimp data-tip="GIMP"/>
                <SiInkscape data-tip="Inkscape"/>
                <span data-tip="Cypress"><Icon icon={cypressIcon}  /></span>
            </div>
            <ReactTooltip type="info"/>
        </article>
    )
}

export default skills