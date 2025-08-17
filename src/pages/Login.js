// src/pages/Login.jsx
import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      if (!email.trim() || !password.trim()) {
        alert('Please fill in all fields');
        return;
      }
      console.log('Logging in:', { email, password });
      alert('Sign in successful!');
    } else {
      if (!name.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
        alert('Please fill in all fields');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Creating account:', { name, email });
      alert('Sign up successful!');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>{isSignIn ? 'Sign In to Your Account' : 'Create an Account'}</h2>

      <form onSubmit={handleSubmit}>
        {!isSignIn && (
          <div style={{ marginBottom: '10px' }}>
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          </div>
        )}

        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
        </div>

        {!isSignIn && (
          <div style={{ marginBottom: '10px' }}>
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
        )}

        <button type="submit" style={submitStyle}>
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </form>

      <hr style={{ margin: '20px 0' }} />
      <p>{isSignIn ? 'Sign in with:' : 'Sign up with:'}</p>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <FaGoogle size={24} style={{ cursor: 'pointer' }} />
        <FaGithub size={24} style={{ cursor: 'pointer' }} />
        <FaFacebook size={24} style={{ cursor: 'pointer' }} />
      </div>

      <p style={{ textAlign: 'center' }}>
        {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={() => setIsSignIn(!isSignIn)}
        >
          {isSignIn ? 'Sign Up' : 'Sign In'}
        </span>
      </p>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const submitStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Login;
