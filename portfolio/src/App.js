import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Menu from './components/menu/menu'
import Home from './components/home/home'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import MoreProjects from './components/moreProjects/moreProjects'
import './App.scss';



function App() {
  return (
    <div className="App">
            <Switch>
                <Route path="/moreProjects">
                    <MoreProjects/>
                </Route>
            </Switch>


      <Menu/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
