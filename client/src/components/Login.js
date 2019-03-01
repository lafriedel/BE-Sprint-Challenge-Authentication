import React from "react";

const Login = props => {
  return (
    <>
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
