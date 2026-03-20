import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Signup = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    number: false,
    special: false
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    setPasswordCriteria({
      length: password.length >= 8,
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    });
  }, [password]);

  const isPasswordValid = Object.values(passwordCriteria).every(Boolean);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (!isPasswordValid) {
      setError('Please ensure your password meets all criteria.');
      return;
    }

    const API_URL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

    try {
      const response = await fetch(`${API_URL}/api/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        localStorage.setItem('username', data.username);
        setIsAuthenticated(true);
        navigate('/dashboard');
      } else {
        setError(data.error || 'Registration failed');
      }
    } catch (err) {
      setError('Unable to connect to the server. Is the Django backend running?');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p className="auth-subtitle">Join us to save your favorite recipes</p>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSignup} className="auth-form">
          <div className="input-group">
            <label>Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Choose a username"
              required 
            />
          </div>
          <div className="input-group">
            <label>Email (Optional)</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-input-wrapper">
              <input 
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a strong password"
                required 
              />
              <button 
                type="button" 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="password-criteria">
            <h4>Password Requirements:</h4>
            <ul className="criteria-list">
              <li className={`criteria-item ${passwordCriteria.length ? 'valid' : 'invalid'}`}>
                {passwordCriteria.length ? '✓' : '✗'} At least 8 characters
              </li>
              <li className={`criteria-item ${passwordCriteria.number ? 'valid' : 'invalid'}`}>
                {passwordCriteria.number ? '✓' : '✗'} Contains a number
              </li>
              <li className={`criteria-item ${passwordCriteria.special ? 'valid' : 'invalid'}`}>
                {passwordCriteria.special ? '✓' : '✗'} Contains special character
              </li>
            </ul>
          </div>

          <button type="submit" className="auth-submit" disabled={!isPasswordValid && password.length > 0}>
            Sign Up
          </button>
        </form>
        <p className="auth-redirect">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
