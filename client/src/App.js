import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { NavLink, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Jokes from "./components/Jokes";

class App extends Component {
  state = {
    registered: false,
    registerError: false,
    loggedIn: false,
    loginError: false,
    user: {
      username: "",
      password: ""
    }
  };

  login = e => {
    e.preventDefault();
    axios
      .post("/login", this.state.user)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        this.setState({
          ...this.state,
          registered: false,
          loggedIn: true,
          loginError: false,
          registerError: false,
          user: {
            username: "",
            password: ""
          }
        });
        this.props.history.push("/jokes");
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
          loginError: true,
          registered: false
        })
      });
  };

  logout = e => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  }

  register = e => {
    e.preventDefault();
    axios
      .post("/register", this.state.user)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          registered: true,
          loggedIn: false,
          registerError: false,
          user: {
            username: "",
            password: ""
          }
        });
        this.props.history.push("/login");
      })
      .catch(err => {
        console.log(err);
        this.setState({
          ...this.state,
          registerError: true
        })
      });
  };

  handleInputChange = e => {
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/login">Log In</NavLink>&nbsp;
            <NavLink to="/register">Register</NavLink>&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>&nbsp;
            <a href="" onClick={e => this.logout(e)}>Log Out</a>
          </nav>
        </header>
        <main>
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                login={this.login}
                loginError={this.state.loginError}
                handleInputChange={this.handleInputChange}
                user={this.state.user}
                registered={this.state.registered}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <Register
                {...props}
                register={this.register}
                registerError={this.state.registerError}
                handleInputChange={this.handleInputChange}
                user={this.state.user}
              />
            )}
          />
          <Route exact path="/jokes" render={props => <Jokes {...props} />} />
        </main>
      </div>
    );
  }
}

export default App;
