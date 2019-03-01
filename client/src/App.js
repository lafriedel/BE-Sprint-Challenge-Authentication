import React, { Component } from "react";
import "./App.css";
import { NavLink, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Jokes from "./components/Jokes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">Log In</NavLink>&nbsp;
            <NavLink to="/register">Register</NavLink>&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
          </nav>
        </header>
        <main>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
          <Route exact path="/jokes" render={props => <Jokes {...props} />} />
        </main>
      </div>
    );
  }
}

export default App;
