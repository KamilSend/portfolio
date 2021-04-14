import React from 'react'

import styles from './experience.module.scss'

const education = () => {
    return(
        <article className={styles.experienceArticle}>
            <div className={styles.experienceTile}>
                <h2>Front-End Developer</h2>
                <h3>desi9n</h3>
                <h4>04/2019 - now</h4>
                <ul>
                    <li>Implementation of software modules</li>
                    <li>Implementation of mobile first approach</li>
                    <li>Documentation management</li>
                    <li>Tests scenarios design</li>
                    <li>Automated tests development</li>
                    <li>Manual tests performance</li>
                    <li>Collaboration with other programmers</li>
                </ul>
            </div>

            {/*<div className={styles.experienceTile}>*/}
            {/*    <h2>Ticket Inspector</h2>*/}
            {/*    <h3>Renoma</h3>*/}
            {/*    <h4>10/2017 - 04/2019</h4>*/}
            {/*    <ul>*/}
            {/*        <li>Performing ticket inspections</li>*/}
            {/*        <li>Training of new employees</li>*/}
            {/*        <li>Handling complaints</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            {/*<div className={styles.experienceTile}>*/}
            {/*    <h2>Geologist</h2>*/}
            {/*    <h3>Geobudwiert</h3>*/}
            {/*    <h4>5/2017 - 10/2017</h4>*/}
            {/*    <ul>*/}
            {/*        <li>Drilling deep and geologic wells</li>*/}
            {/*        <li>Geotechnical research</li>*/}
            {/*        <li>Drainage of construction excavations</li>*/}
            {/*        <li>Geotechnical documentation management</li>*/}
            {/*        <li>Creating geotechnical projects</li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </article>
    )
}

export default education