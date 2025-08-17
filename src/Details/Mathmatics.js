import React from "react";
import { Link } from "react-router-dom";

function MathematicsDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Mathematics</h2>
      <h3>Topics:</h3>
      <ul>
        <li>Algebra</li>
        <li>Geometry</li>
        <li>Calculus</li>
        <li>Trigonometry</li>
      </ul>

      <h3>Resources:</h3>
      <ul>
        <li><a href="https://www.khanacademy.org/math" target="_blank" rel="noreferrer">Khan Academy</a></li>
        <li><a href="https://www.coursera.org/specializations/mathematics" target="_blank" rel="noreferrer">Coursera Math</a></li>
      </ul>

      <Link to="/">🔙 Back to Subjects</Link>
    </div>
  );
}

export default MathematicsDetail;
