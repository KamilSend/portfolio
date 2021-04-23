import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Menu from './components/menu/menu'
import Home from './components/home/home'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import Background from './components/background/background'
import Layout from './components/layout/layout'
import MoreProjects from './components/moreProjects/moreProjects'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';



function App() {
  return (
    <div className="App">
            <Switch>
                <Route path="/moreProjects">
                    <MoreProjects/>
                </Route>
            </Switch>
        <Layout/>
      <Menu/>
      {/*<Home/>*/}
      {/*<About/>*/}
      {/*<Projects/>*/}
      {/*<Contact/>*/}
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
