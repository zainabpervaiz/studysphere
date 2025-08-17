import React from "react";
import { Link } from "react-router-dom";

function ChemistryDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Chemistry</h2>
      <h3>Topics:</h3>
      <ul>
        <li>Organic Chemistry</li>
        <li>Inorganic Chemistry</li>
        <li>Physical Chemistry</li>
        <li>Biochemistry</li>
      </ul>

      <h3>Resources:</h3>
      <ul>
        <li><a href="https://www.khanacademy.org/science/chemistry" target="_blank" rel="noreferrer">Khan Academy Chemistry</a></li>
        <li><a href="https://chem.libretexts.org/" target="_blank" rel="noreferrer">Chemistry LibreTexts</a></li>
        <li><a href="https://ocw.mit.edu/courses/chemistry/" target="_blank" rel="noreferrer">MIT OpenCourseWare Chemistry</a></li>
      </ul>

      <Link to="/">🔙 Back to Subjects</Link>
    </div>
  );
}

export default ChemistryDetail;
