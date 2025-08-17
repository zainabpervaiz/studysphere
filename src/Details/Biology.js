import React from "react";
import { Link } from "react-router-dom";

function BiologyDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Biology</h2>
      <h3>Topics:</h3>
      <ul>
        <li>Cell Biology</li>
        <li>Genetics</li>
        <li>Ecology</li>
        <li>Human Anatomy</li>
        <li>Evolution</li>
      </ul>

      <h3>Resources:</h3>
      <ul>
        <li><a href="https://www.khanacademy.org/science/biology" target="_blank" rel="noreferrer">Khan Academy Biology</a></li>
        <li><a href="https://www.nature.com/subjects/biology" target="_blank" rel="noreferrer">Nature Biology Articles</a></li>
        <li><a href="https://www.coursera.org/browse/life-sciences/biology" target="_blank" rel="noreferrer">Coursera Biology Courses</a></li>
      </ul>

      <Link to="/">🔙 Back to Subjects</Link>
    </div>
  );
}

export default BiologyDetail;
