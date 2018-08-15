import React, { Component } from 'react';
import './App.css';

import { Layout, Header,Navigation,Drawer,Content } from  'react-mdl';
import  Main from './components/main';
import{ Link } from 'react-router-dom';
import  Contact from './components/contact';
import  Projects from './components/projects';
import  LandingPage from './components/landingpage';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <div class="navbar">
          <a href="index.html#education">Education</a>
          <a href="index.html#achivement">Achivement</a>
          <a href="index.html#project">Project</a>
          <a href="index.html#skill">Skill</a>
          <a href="index.html#social-link">Social-link</a>
        </div>
        <div className="main" >
          <LandingPage />
        </div>
      </div>
    );
  }
}

export default App;
