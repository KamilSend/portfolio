import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

import { render } from 'react-dom';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import styles from './menu.module.scss'

const main = 0;
const about = window.innerHeight;
const projects = window.innerHeight*2;
const contact = window.innerHeight*3;

class Menu extends Component {

    scrollTo(element) {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    render(){
        return(
            // <nav className={styles.mainNav}>
            //     <NavLink to="/" onClick={() => scroll.scrollToTop()} className={styles.menuLink}>Home</NavLink>
            //     <NavLink to="/" onClick={() => scroll.scrollTo(about)} className={styles.menuLink}>Umiejętności</NavLink>
            //     <NavLink to="/" onClick={() => scroll.scrollTo(projects)}  className={styles.menuLink}>Portfolio</NavLink>
            //     <NavLink to="/" onClick={() => scroll.scrollTo(contact)} className={styles.menuLink}>Kontakt</NavLink>
            // </nav>
            <nav className={styles.mainNav}>
                <NavLink to="/" onClick={() => this.scrollTo('home')} className={styles.menuLink}>Home</NavLink>
                <NavLink to="/" onClick={() => this.scrollTo('about')} className={styles.menuLink}>Umiejętności</NavLink>
                <NavLink to="/" onClick={() => this.scrollTo('portfolio')} className={styles.menuLink}>Portfolio</NavLink>
                <NavLink to="/" onClick={() => this.scrollTo('contact')} className={styles.menuLink}>Kontakt</NavLink>
            </nav>
        )
    }

}

export default Menu