import React from 'react';
import LandingPage from './landingpage';
import {Route, Switch} from 'react-router-dom';
import  AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import  Resume from './resume';
const Main = () =>(
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/projects" component={Projects} />
  </Switch>
)


export default Main;
