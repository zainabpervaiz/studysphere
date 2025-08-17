import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");

  const questions = [
    { id: 1, title: "What is React Hooks?", subject: "Web Development" },
    { id: 2, title: "Explain Photosynthesis process", subject: "Biology" },
    { id: 3, title: "What is Newton's Third Law?", subject: "Physics" },
  ];

  const filteredQuestions = questions.filter((q) =>
    q.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Questions List */}
      <section className="questions-section">
        <h2>Latest Questions</h2>
        <ul>
          {filteredQuestions.map((q) => (
            <li key={q.id}>
              <h3>{q.title}</h3>
              <p><strong>Subject:</strong> {q.subject}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Subjects */}
      <section className="subjects-section">
        <h2>Featured Subjects</h2>
        <div className="subjects-grid">
          <div className="subject-card">Mathematics</div>
          <div className="subject-card">Science</div>
          <div className="subject-card">Computer Science</div>
          <div className="subject-card">History</div>
        </div>
      </section>

      {/* Latest News */}
      <section className="news-section">
        <h2>Latest News</h2>
        <div className="news-item">
          <h3>StudySphere v2.0 is Live!</h3>
          <p>We have introduced new features for students to connect better.</p>
        </div>
      </section>

      
      
    </div> 
  );
}

export default Home;
