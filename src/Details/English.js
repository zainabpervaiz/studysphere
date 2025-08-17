import React from "react";
import { Link } from "react-router-dom";

function EnglishDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>English</h2>
      <h3>Topics:</h3>
      <ul>
        <li>Grammar</li>
        <li>Literature</li>
        <li>Writing Skills</li>
        <li>Vocabulary</li>
        <li>Spoken English</li>
      </ul>

      <h3>Resources:</h3>
      <ul>
        <li><a href="https://www.grammarly.com/blog/" target="_blank" rel="noreferrer">Grammarly Blog</a></li>
        <li><a href="https://www.bbc.co.uk/learningenglish" target="_blank" rel="noreferrer">BBC Learning English</a></li>
        <li><a href="https://www.coursera.org/browse/language-learning/english" target="_blank" rel="noreferrer">Coursera English Courses</a></li>
      </ul>

      <Link to="/">🔙 Back to Subjects</Link>
    </div>
  );
}

export default EnglishDetail;
