
import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert('Please fill in all fields');
      return;
    }

    console.log('Logging in:', { email, password });
    alert('Sign in successful!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Sign In to Your Account</h2>
      
      

      {/* Login form */}
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={inputStyle}
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={inputStyle}
          />
        </div>
        {/* Social login buttons */}
      <div style={{ marginBottom: '20px' }}>
        <button style={buttonStyle}><FaGoogle /> Sign In with Google</button>
        <button style={buttonStyle}><FaGithub /> Sign In with GitHub</button>
        <button style={buttonStyle}><FaFacebook /> Sign In with Facebook</button>
      </div>
        <button type="submit" style={submitStyle}>Sign In</button>
      </form>
    </div>
  );
}

// Styles
const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#eee',
  border: '1px solid #ccc',
  cursor: 'pointer',
  fontSize: '16px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const submitStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export default SignIn;
