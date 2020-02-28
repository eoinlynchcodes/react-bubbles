import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  
  const history = useHistory();
  const baseURL = 'http://localhost:5000';
  const [ loginform, setLoginform ] = useState({
    username: '',
    password: '',
  })

  const onChange = (event) => {
    setLoginform({
      ...loginform,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${baseURL}/api/login`, loginform)
    .then((response) => {
      console.log(response.data.payload);
      // Need to pass the correct data to localStorage.
      // Use console.log to check and ensure.
      localStorage.setItem('token', response.data.payload)
      history.push('/youmadeit');
    })
    .catch((error) => {
      console.log(error);
    })

  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>

      <form onSubmit={event => handleSubmit(event)}>
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
