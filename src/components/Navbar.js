
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react'; // سرچ آئیکن

function Navbar() {
  return (
    <nav style={{
      padding: '10px 20px',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      
      {/* Left-side Links */}
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/">Home</Link>
        <Link to="/ask">Ask Question</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/subject">Subject</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      {/* Center Search */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '5px 10px',
        borderRadius: '20px',
        boxShadow: '0 0 5px rgba(0,0,0,0.1)'
      }}>
        <Search size={18} style={{ marginRight: '8px' }} />
        <input
          type="text"
          placeholder="Search..."
          style={{
            border: 'none',
            outline: 'none',
            fontSize: '14px'
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
