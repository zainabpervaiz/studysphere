import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      padding: '20px 30px',
      backgroundColor: 'black',
      color: 'grey',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      
      {/* Logo with route to Home */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <span style={{ fontWeight: 'bold', fontSize: '18px', color: 'skyblue' }}>
          <i className="fas fa-graduation-cap" style={{ marginRight: '8px' }}></i> StudySphere
        </span>
      </Link>

      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/" style={{ color: "white", textDecoration: 'none' }}>
          <i className="fas fa-home"></i> Home
        </Link>
        <Link to="/ask" style={{ color: "white", textDecoration: 'none' }}>
          <i className="fas fa-question-circle"></i> Ask Question
        </Link>
        <Link to="/contact" style={{ color: "white", textDecoration: 'none' }}>
          <i className="fas fa-envelope"></i> Contact
        </Link>
        <Link to="/subject" style={{ color: "white", textDecoration: 'none' }}>
          <i className="fas fa-book"></i> Subject
        </Link>
        <Link to="/profile" style={{ color: "white", textDecoration: 'none' }}>
          <i className="fas fa-user"></i> Profile
        </Link>
        <Link to="/about" style={{ color: "white", textDecoration: 'none' }}>
          <i className="fas fa-info-circle"></i> About
        </Link>
        <Link to="/Login" style={{ color: "white", textDecoration: 'none' }}>
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
