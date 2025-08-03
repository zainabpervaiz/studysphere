
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About StudySphere</h1>
      <p>
        StudySphere is a modern Q&A platform designed specifically for students. It allows learners to ask academic questions,
        get answers from peers or experts, and explore subject-related discussions all in one place.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make learning more collaborative, accessible, and engaging. Whether you're stuck on a math problem or looking
        for explanations in science, StudySphere helps you connect with others and get help instantly.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>📌 Ask and answer questions</li>
        <li>📷 Upload images with your questions</li>
        <li>🔍 Search and filter by subject or profile</li>
        <li>❤️ Like helpful responses</li>
        <li>🌓 Dark mode for comfortable learning anytime</li>
      </ul>

      <h2>Who Is It For?</h2>
      <p>
        StudySphere is built for students from schools, colleges, and universities who are looking to strengthen their
        understanding through interactive discussion. Teachers and subject experts can also join to share their knowledge.
      </p>
    </div>
  );
}

export default About;
