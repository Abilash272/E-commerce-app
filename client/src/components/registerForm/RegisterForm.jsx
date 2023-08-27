import React, { useState } from 'react';
import './RegisterForm.css';
import axios from 'axios';

function RegisterForm() {
  const url = "http://localhost:5006/admin/register";
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  
  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    const isValidEmail = validateEmail(newEmail);
    setEmail(newEmail);
    setValidEmail(isValidEmail);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    const isValidPassword = validatePassword(newPassword);
    setPassword(newPassword);
    setValidPassword(isValidPassword);
    if (newPassword !== confirmPassword) {
      setValidConfirmPassword(false)
    } else {
      setValidConfirmPassword(true)
    }
  };

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/;
    return passwordPattern.test(password);
  };

  const handleConfirmPasswordChange = (event) => {
    const newConfirmPassword = event.target.value;
    const isValidConfirmPassword = validateConfirmPassword(newConfirmPassword)
    setValidConfirmPassword(isValidConfirmPassword)
    setConfirmPassword(newConfirmPassword);
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validEmail && validPassword && password === confirmPassword) {
      console.log("hello");
      // Perform registration logic
      axios.post(url, {email, password})
      .then(response => {
        setMessage('Registration successful:', response.data.message);
        // You can handle success here, such as showing a success message or redirecting
      })
      .catch(error => {
        setMessage('Registration failed:', error.response.data.message);
        // You can handle errors here, such as showing an error message
      });

    }
  };

  return (
    <div className="container">

      <div className="register-form">
        <h2 className='title'>Admin Registeration</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={validEmail ? 'success' : 'error'}
            />
          </div>
          <div className="input-container">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className={validPassword ? 'success' : 'error'}
            />
          </div>
          <div className="input-container">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={validConfirmPassword ? 'success' : 'error'}
            />
          </div>

          <button type="submit" disabled={!validEmail || !validPassword || !validConfirmPassword} className="submit-button">
            Register
          </button>
          <span className='message'>{message}</span>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
