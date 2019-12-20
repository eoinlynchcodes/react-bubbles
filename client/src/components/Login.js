import React, { useRef } from 'react';
import axios from 'axios';

export default function Login(props) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const submit = () => {
    axios.post('http://localhost:5000/api/login', {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
      .then(res => {

        // const token = localStorage.getItem('token');
        console.log(res.data.payload);
        // SUCCESS! Credentials are valid:
        //   1- Put the token string in local storage under a 'token' key
        localStorage.setItem('token', res.data.payload);
        // localStorage.setItem('token', JSON.stringify(myArray));
        //   2- Redirect users to the /quotes route
        props.history.push('/bubblepage')
      })
      .catch(error => {
        // Alert a sensible message pulled from the error object
        alert('There is an error');
      });
  };

  return (
    <div className='login'>
      <h3>Login here:</h3>
      <div className='login-inputs'>
        Username: <input ref={usernameRef} type="text" />
        <br />
        Password: <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
