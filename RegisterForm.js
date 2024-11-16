// RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './AuthPage.css';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { email, password });
      alert('Registration successful');
      navigate('/login'); // Redirect to login page after successful registration
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-form-container">
        <h2 className="auth-form-title">🌍Register</h2>
        <form onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="auth-button">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login" className="auth-secondary-link">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
