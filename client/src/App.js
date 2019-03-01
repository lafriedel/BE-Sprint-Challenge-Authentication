import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { NavLink, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Jokes from "./components/Jokes";

class App extends Component {
  state = {
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
          user: {
            username: "",
            password: ""
          }
        })
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push("/jokes");
  };

  register = e => {
    e.preventDefault();
    axios
      .post("/register", this.state.user)
      .then(res => {
        console.log(res);
        this.setState({
          user: {
            username: "",
            password: ""
          }
        })
      })
      .catch(err => {
        console.log(err);
      });
    this.props.history.push("/login");
  };

  handleInputChange = e => {
    this.setState({
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
            <NavLink to="/jokes">Jokes</NavLink>
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
                handleInputChange={this.handleInputChange}
                user={this.state.user}
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
