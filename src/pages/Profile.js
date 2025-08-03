import React from 'react';

function Profile() {
  const user = {
    name: 'Zainab Pervaiz',
    email: 'zainab@example.com',
    bio: 'A passionate student who loves to ask and answer questions.',
    joined: 'August 2025',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Profile</h2>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        maxWidth: '400px',
        backgroundColor: '#f9f9f9'
      }}>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio}</p>
        <p><strong>Joined:</strong> {user.joined}</p>
      </div>
    </div>
  );
}

export default Profile;
