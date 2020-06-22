// Dependencies Imports
import React, { useState } from 'react'
import {
  BrowserRouter, 
  Route, 
  Switch,
  Redirect,
  Link
} from "react-router-dom"
import './App.css';

// Components Import
import Home from "./Home"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"


function App() {

  const [page, setPage] = useState("home")
  
  return (
    <div className="app-container">
      {/* <div className='app-background-stars'></div>
      <div className='app-background-stars2'></div>
      <div className='app-background-stars3'></div> */}
      <BrowserRouter>
      <header className="app-header">
        <div className="app-logo">
          <div></div>
          <h1>Tal.</h1>
        </div>
        <nav className="app-navbar">
          <Link className={page === "home" ? "navbar-active" : null} to="/home">HOME</Link>
          <Link className={page === "projects" ? "navbar-active" : null} to="/projects">PROJECTS</Link>
          <Link className={page === "about" ? "navbar-active" : null} to="/about">ABOUT</Link>
          <Link className={page === "contact" ? "navbar-active" : null} to="/contact">CONTACT</Link>
          <div className="app-navbar-animated-selector app-start-selector"></div>
        </nav>
      </header>
        <Switch>
          <Route exact path="/home" render={(props) => <Home {...props} setPage={setPage}  />}/>
          <Route exact path="/projects" render={(props) => <Projects {...props} setPage={setPage} />}/>
          <Route exact path="/about" render={(props) => <About {...props} setPage={setPage} />}/>
          <Route exact path="/contact" render={(props) => <Contact {...props} setPage={setPage} />}/>
          <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
