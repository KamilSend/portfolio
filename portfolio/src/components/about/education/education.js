import React from 'react'

import styles from './education.module.scss'

const education = () => {
    return(
        <article className={styles.educationArticle}>
            <div className={styles.educationTile}>
                <h2>Courses</h2>
                <h4>2019 - now</h4>
                <ul>
                    <li>React - The Complete Guide</li>
                    <li>React for beginners</li>
                    <li>Advanced CSS and JavaScript</li>
                    <li>Angular for beginners</li>
                    <li>Modern Web Design & Development</li>
                    <li>Programming in JavaScript</li>
                    <li>Advanced CSS and Sass</li>
                    <li>Front-end advanced</li>
                    <li>Front-end for beginners</li>
                </ul>
            </div>
            <div className={styles.educationTile}>
                <h2>Akademia Górniczo-Hutnicza</h2>
                <h3>Mining and Geology</h3>
                <h4>2012 - 2017</h4>
            </div>
        </article>
    )
}

export default education