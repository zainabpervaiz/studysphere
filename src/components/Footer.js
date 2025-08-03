// src/components/Footer.js
import React from 'react';
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '20px 0',
      marginTop: '30px',
      textAlign: 'center'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <FaGoogle size={24} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <FaGithub size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <FaFacebook size={24} />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px', color: '#fff' }}>
          <FaWhatsapp size={24} />
        </a>
      </div>
      <div style={{ fontSize: '14px' }}>
        <p>📞 Phone: +92 300 1234567</p>
        <p>✉️ Email: info@studysphere.com</p>
        <p>👤 Name: Zainab Pervaiz</p>
        <p>© {new Date().getFullYear()} StudySphere. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
