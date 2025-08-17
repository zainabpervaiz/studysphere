import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! 📩');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: '#f9faff', // light background
      borderRadius: '10px',
      boxShadow: '0px 4px 15px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#4a90e2', marginBottom: '5px' }}>Contact Us</h2>
      <p style={{ color: '#555', marginBottom: '20px' }}>
        Feel free to reach out with any questions or suggestions!
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333', fontWeight: 'bold' }}>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333', fontWeight: 'bold' }}>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#333', fontWeight: 'bold' }}>Message:</label><br />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              outline: 'none'
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            background: 'linear-gradient(45deg, #4a90e2, #6fb1fc)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
          onMouseOver={(e) => e.target.style.background = 'linear-gradient(45deg, #357ABD, #4a90e2)'}
          onMouseOut={(e) => e.target.style.background = 'linear-gradient(45deg, #4a90e2, #6fb1fc)'}
        >
          Send Message
        </button>
      </form>

      {/* Google Map */}
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#4a90e2' }}>Our Location</h3>
        <iframe
          title="StudySphere Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.292659375478!2d67.00113697429638!3d24.8614626459827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dd4b8c0c2ef%3A0xbbb05f7f8a9b8c41!2sKarachi!5e0!3m2!1sen!2s!4v1699898999999!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
