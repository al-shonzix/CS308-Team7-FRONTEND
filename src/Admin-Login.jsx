import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [AdminLoginSuccessful, setAdminLoginSuccessful] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Clear previous login error
    setLoginError('');

    // Example POST request to authenticate the user
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assume successful login if response is OK
        setLoginSuccessful(false);
        setAdminLoginSuccessful(true);
        // Handle successful login, e.g., redirect to another page or store user data
      } else {
        // Handle login error
        setLoginError(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setLoginError('An error occurred. Please try again.');
    }
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      return 'Password should be at least 8 characters long';
    } else if (value.length > 16) {
      return 'Password should be at max 16 characters long';
    }
    return '';
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const errorMessage = validatePassword(value);
    setErrors((prevErrors) => ({ ...prevErrors, password: errorMessage }));
  };

  return (
    <div className="admin-login-page">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="E.g: johndoe"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <button type="submit">Login</button>
        {loginError && <span className="error-message">{loginError}</span>}
        {AdminLoginSuccessful && <span className="success-message">Login successful!</span>}
      </form>

      <div className="login-link">
        <Link to="/login">Login as passanger!</Link>
      </div>
      <div className="signup-link">
        New? <Link to="/Create-Account">Create an account!</Link>
      </div>
    </div>
  )
}

export default AdminLoginPage;