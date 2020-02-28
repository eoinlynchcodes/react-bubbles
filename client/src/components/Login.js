import React, { useState } from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [ loginform, setLoginform ] = useState({
    username: '',
    password: '',
  })

  const onChange = () => {

  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form>
        <label>Username:</label>
        <input 
        name="username"
        placeholder="Username:"
        type="text"
        onChange={event => onChange(event)}
        />

        <label>Password:</label>
        <input 
        name="password"
        placeholder="Password"
        type="text"
        onChange={event => onChange(event)}
        />
        <br></br>
        <button type="submit">Login</button>
      </form>

    </>
  );
};

export default Login;
