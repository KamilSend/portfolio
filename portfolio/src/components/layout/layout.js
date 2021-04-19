import React from 'react'

import Background from '../background/background'
import Home from '../home/home'
import About from '../about/about'
import Projects from '../projects/projects'
import Contact from '../contact/contact'
import Footer from '../footer/footer'

import styles from './layout.module.scss'

const layout = () => (
    <>
        <Background/>
        <div className={styles.layout}>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>

    </>
)

export default layout