import React from "react";
import { Link } from "react-router-dom";

function PhysicsDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Physics</h2>
      <h3>Topics:</h3>
      <ul>
        <li>Mechanics</li>
        <li>Thermodynamics</li>
        <li>Optics</li>
        <li>Electromagnetism</li>
      </ul>

      <h3>Resources:</h3>
      <ul>
        <li><a href="https://www.khanacademy.org/science/physics" target="_blank" rel="noreferrer">Khan Academy Physics</a></li>
        <li><a href="https://www.physicsclassroom.com/" target="_blank" rel="noreferrer">Physics Classroom</a></li>
      </ul>

      <Link to="/">🔙 Back to Subject.js</Link>
    </div>
  );
}

export default PhysicsDetail;
