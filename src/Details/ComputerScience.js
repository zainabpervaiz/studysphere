import React from "react";
import { Link } from "react-router-dom";

function ComputerScienceDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Computer Science</h2>
      <h3>Topics:</h3>
      <ul>
        <li>Programming Fundamentals (C, C++, Python, Java)</li>
        <li>Data Structures and Algorithms</li>
        <li>Databases (SQL, NoSQL)</li>
        <li>Operating Systems</li>
        <li>Artificial Intelligence</li>
        <li>Web Development</li>
      </ul>

      <h3>Resources:</h3>
      <ul>
        <li><a href="https://www.geeksforgeeks.org/" target="_blank" rel="noreferrer">GeeksforGeeks</a></li>
        <li><a href="https://cs50.harvard.edu/x/" target="_blank" rel="noreferrer">Harvard CS50 Course</a></li>
        <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer">FreeCodeCamp</a></li>
        <li><a href="https://roadmap.sh/" target="_blank" rel="noreferrer">Developer Roadmaps</a></li>
      </ul>

      <Link to="/">🔙 Back to Subjects</Link>
    </div>
  );
}

export default ComputerScienceDetail;
