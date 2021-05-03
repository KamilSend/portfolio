import React from 'react'

import backgroundImg from '../../assets/img/laguna.jpg';
import styles from './background.module.scss';

const background = () => (
    <>
        <div className={styles.homeImg}></div>
        {/*<img src={backgroundImg} alt="background image" className={styles.homeImg}/>*/}
        <div className={styles.imgOverlay}></div>
    </>
)

export default background