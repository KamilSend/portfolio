import React from 'react'
import { NavLink } from 'react-router-dom';

import { CgArrowTopRightR } from 'react-icons/cg'

import styles from './projects.module.scss'

import picas from '../../assets/img/picasTile.png'
import budujnaturalnie from '../../assets/img/budujnaturalnieTile.png'
import cypress from '../../assets/img/cypressTile.png'
import ekeyboard from '../../assets/img/ekeyboardTile.png'
import soup from '../../assets/img/soupTile.png'
import natours from '../../assets/img/natoursTile.png'
import mapa from '../../assets/img/mapaTile.png'
import faktury from '../../assets/img/fakturyTile.png'




const projects = () => {
    return(
        <section  name="portfolio" id="projects" className={styles.projects}>
            <h2 className={styles.projectsTitle}>Portfolio</h2>

            <div className={styles.cardWrapper}>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <img src={picas} alt="picas sklep internetowy" className={styles.projectsImg}/>
                    </div>
                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>picas</h3>
                        <p className={styles.cardText}>Sklep internetowy oferujący naturalne materiały budowlane
                            <br/><span className={styles.cardUsed}>Wykonano z użyciem:</span>
                            <ul>
                                <li>WooCommerce</li>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                            </ul>
                        </p>

                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <img src={cypress} alt="Automatyzacja wystawiania faktur" className={styles.projectsImg}/>
                    </div>
                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>Automatyzacja wystawiania faktur</h3>
                        <p className={styles.cardText}>Skrypt automatyzujący proces wystawiania faktur sprzedażowych
                            <br/><span className={styles.cardUsed}>Wykonano z użyciem:</span>
                            <ul>
                                <li>Cypress</li>
                                <li>JSON</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <img src={budujnaturalnie} alt="budujnaturalnie" className={styles.projectsImg}/>
                    </div>
                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>budujnaturalnie</h3>
                        <p className={styles.cardText}>Strona promująca naturalne tynki gliniane
                            <br/><span className={styles.cardUsed}>Wykonano z użyciem:</span>
                            <ul>
                                <li>Wordpress</li>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>Google Maps</li>
                            </ul>
                        </p>

                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <img src={ekeyboard} alt="Muzyczny program edukacyjny" className={styles.projectsImg}/>
                    </div>
                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>eKeyboard</h3>
                        <p className={styles.cardText}>Aplikacja PWA do nauki gry na keyboardzie
                            <br/><span className={styles.cardUsed}>Wykonano z użyciem:</span>
                            <ul>
                                <li>React 16</li>
                                <li>React-router 5</li>
                                <li>HTML 5</li>
                                <li>CSS 3 / Sass</li>
                                <li>UIfx</li>
                            </ul>
                        </p>

                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <img src={mapa} alt="mapa użytkowników" className={styles.projectsImg}/>
                    </div>
                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>Mapa adresów</h3>
                        <p className={styles.cardText}>PoC aplikacji webowej prezentującej adresy na mapie
                            <br/><span className={styles.cardUsed}>Wykonano z użyciem:</span>
                            <ul>
                                <li>CAPAP API</li>
                                <li>Leaflet</li>
                                <li>Axios</li>
                                <li>Firebase</li>
                                <li>React</li>
                                <li>React - bootstrap</li>
                            </ul>
                        </p>

                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <img src={soup} alt="Kalkulator kulinarny" className={styles.projectsImg}/>
                    </div>
                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>Kalkulator kulinarny</h3>
                        <p className={styles.cardText}>Kalkulator umożliwiajacy obliczanie czasu gotowania różnych składników
                            <br/><span className={styles.cardUsed}>Wykonano z użyciem:</span>
                            <ul>
                                <li>JavaScript</li>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                            </ul>
                        </p>

                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.front}>
                        <img src={faktury} alt="Wystawianie faktur" className={styles.projectsImg}/>
                    </div>
                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>eFaktury</h3>
                        <p className={styles.cardText}>Aplikacja webowa do wystawiania dokumentów sprzedażowych
                            <br/><span className={styles.cardUsed}>Wykonano z użyciem:</span>
                            <ul>
                                <li>React</li>
                                <li>React - bootstrap</li>
                                <li>Firebase</li>
                                <li>Axios</li>
                                <li>Wouter</li>
                                <li>CSS Modules</li>
                            </ul>
                        </p>

                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.front}>
                        <img src={natours} alt="Natours" className={styles.projectsImg}/>
                    </div>
                    <div className={styles.back}>
                        <h3 className={styles.cardTitle}>Natours</h3>
                        <p className={styles.cardText}>Strona promująca aktywność na świeżym powietrzu
                            <br/><span className={styles.cardUsed}>Wykonano z użyciem:</span>
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3 / Sass</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default projects