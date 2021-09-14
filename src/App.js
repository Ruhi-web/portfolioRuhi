import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <div className="container app-outer-wrap">
        <div className="app-border">
          <div className="row app-content-wrapper">
            <div className="col-lg-3">
              <div className="app-sidebar">
                <Sidebar/>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="app-main-content">
                <Navbar />
                <Switch>
                <Route exact path="/"><About /></Route>
                <Route path="/resume"><Resume /></Route>
                <Route path="/projects"><Projects /></Route>
                <Route>
                <Redirect to="/" />
                </Route>
                </Switch>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
