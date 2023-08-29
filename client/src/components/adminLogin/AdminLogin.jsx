import axios from 'axios';
import React, { useState } from 'react';
import './AdminLogin.css'; // Create this CSS file for styling

function AdminLogin({getToken}) {
  const url = "http://localhost:5006/admin/login";

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    await axios.post(url, {email, password}).then(
      response => {
        localStorage.setItem('token', response.data.token);
        getToken(response.data.token)
      }
    ).catch(
      error => {
        console.log(error.message);
      }
    )
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>Admin Login</h1>
        </div>
        <div className="login-form">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Log In</button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
