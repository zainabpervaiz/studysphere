import React from 'react';

function Profile() {
  const user = {
    name: 'Zainab Pervaiz',
    email: 'zainab@gmail.com',
    bio: 'A passionate student who loves to ask and answer questions.',
    joined: 'August 2025',
    avatar: 'https://i.pinimg.com/736x/57/fc/9e/57fc9ed23251805d35bcd0a5733b819e.jpg', // Profile Picture Link Placeholder
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    achievements: [
      'Top Answer Contributor - July 2025',
      '100+ Questions Asked',
      '50+ Accepted Answers'
    ]
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Profile</h2>

      <div style={{
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>

        {/* Profile Picture */}
        <img
          src="https://i.pinimg.com/736x/57/fc/9e/57fc9ed23251805d35bcd0a5733b819e.jpg"
          alt="Profile"
          style={{
            borderRadius: '50%',
            width: '120px',
            height: '120px',
            objectFit: 'cover',
            marginBottom: '15px',
            border: '3px solid #4CAF50'
          }}
        />

        {/* Basic Info */}
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
        <p><strong>Joined:</strong> {user.joined}</p>

        {/* Skills */}
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h4>Skills:</h4>
          <ul>
            {user.skills.map((skill, index) => (
              <li key={index}>✅ {skill}</li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <h4>Achievements:</h4>
          <ul>
            {user.achievements.map((achievement, index) => (
              <li key={index}>🏆 {achievement}</li>
            ))}
          </ul>
        </div>

        {/* Edit Profile Button */}
        <button style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
