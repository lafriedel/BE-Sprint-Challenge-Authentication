import React from "react";

const Login = props => {
  return (
    <>
        <h1>Log In</h1>
        {props.registered && <p>Thank you for registering! Please log in.</p>}
        {props.loginError && <p>Invalid credentials. Please try again.</p>}
      <form onSubmit={e => props.login(e)}>
        <input
          type="text"
          name="username"
          value={props.user.username}
          onChange={props.handleInputChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={props.user.password}
          onChange={props.handleInputChange}
          placeholder="password"
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
