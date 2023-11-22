import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      const response = await axios.post('http://localhost:9000/login', loginData);
      const { success, message } = response.data;
      if (success) {
        console.log('Login Successful');
        // Redirect or perform other actions on successful login
      } else {
        console.log(message);
      }
    } catch (error) {
      console.error('Login Error', error);
    }
    setLoginData({
      username: '',
      password: ''
    });
  };

  return (
    <div className="login-container">
      <h1>This is a login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={loginData.username}
          required
          onChange={handleLoginChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={loginData.password}
          required
          onChange={handleLoginChange}
        />
        <button type='submit'>Login</button>
      </form>
      <p>
        Not registered yet? <Link to="/">Signup Now</Link>
      </p>
    </div>
  );
}

export default Login;
