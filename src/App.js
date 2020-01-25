import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import About from './components/About/About';
import Error from './components/Error/Error';
import './index.css';
import Contact from "./components/Contact/Contact";
import Donate from "./components/Donate/Donate";
import Events from "./components/Events/Events";
import OurTeam from "./components/OurTeam/OurTeam";
import Press from './components/Press/Press'
import Projects from "./components/Projects/Projects";
import Resources from "./components/Resources/Resources";


class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
            <div>
              <Nav/>
              <Switch>
                <Route path="/" component={Main} exact/>
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact}/>
                <Route path="/donate" component={Donate} />
                <Route path="/events" component={Events} />
                <Route path="/ourteam" component={OurTeam} />
                <Route path="/press" component={Press} />
                <Route path="/projects" component={Projects} />
                <Route path="/resources" component={Resources} />
                <Route component={Error} />
              </Switch>
            </div>
          </BrowserRouter>
        </div>

    );
  }
}

export default App;
