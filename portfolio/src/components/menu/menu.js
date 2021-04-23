import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { DropdownButton, Dropdown,  } from 'react-bootstrap';

import { scroller } from 'react-scroll'

import styles from './menu.module.scss'

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
            <>
                <DropdownButton id="dropdown-basic-button" className={styles.dropdown} title="">
                    <Dropdown.Item><NavLink to="/" onClick={() => this.scrollTo('home')} className={styles.menuLink}>Home</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink to="/" onClick={() => this.scrollTo('about')} className={styles.menuLink}>Umiejętności</NavLink></Dropdown.Item>
                    <Dropdown.Item ><NavLink to="/" onClick={() => this.scrollTo('portfolio')} className={styles.menuLink}>Portfolio</NavLink></Dropdown.Item>
                    <Dropdown.Item><NavLink to="/" onClick={() => this.scrollTo('contact')} className={styles.menuLink}>Kontakt</NavLink></Dropdown.Item>
                </DropdownButton>
                <div id="menuToggle" className={styles.menuToggle}>
                    <div className={styles.menuTogglePad}></div>
                    <span className={styles.menuSpan}></span>
                    <span className={styles.menuSpan}></span>
                    <span className={styles.menuSpan}></span>
                </div>

                <nav className={styles.mainNav}>
                    <NavLink to="/" onClick={() => this.scrollTo('home')} className={styles.menuLink}>Home</NavLink>
                    <NavLink to="/" onClick={() => this.scrollTo('about')} className={styles.menuLink}>Umiejętności</NavLink>
                    <NavLink to="/" onClick={() => this.scrollTo('portfolio')} className={styles.menuLink}>Portfolio</NavLink>
                    <NavLink to="/" onClick={() => this.scrollTo('contact')} className={styles.menuLink}>Kontakt</NavLink>
                </nav>
            </>

        )
    }

}

export default Menu