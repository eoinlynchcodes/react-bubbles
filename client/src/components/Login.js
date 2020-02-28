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
      localStorage.setItem('token', response.data.payload)
      history.push('/bubblepage');
    })
    .catch((error) => {
      console.log(error);
      alert('There has been an error. You entered incorrect data or the system is broken. Please try again later.');
    })

  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={event => handleSubmit(event)}>
        <h1>Login Here:</h1>
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
