
import React from 'react';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';

function SignUp() {
  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2>Create an Account</h2>

      <form>
        <div style={{ marginBottom: '10px' }}>
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Password</label>
          <input type="password" placeholder="Enter password" style={inputStyle} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>Confirm Password</label>
          <input type="password" placeholder="Re-enter password" style={inputStyle} />
        </div>

        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>

      <hr style={{ margin: '20px 0' }} />

      <p>Sign up with:</p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <FaGoogle size={24} style={{ cursor: 'pointer' }} />
        <FaGithub size={24} style={{ cursor: 'pointer' }} />
        <FaFacebook size={24} style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
}

// ✨ Styling (inline)
const inputStyle = {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default SignUp;
