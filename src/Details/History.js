import React from "react";
import { Link } from "react-router-dom";

function HistoryDetail() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>History</h2>
      <h3>Topics:</h3>
      <ul>
        <li>World History</li>
        <li>Ancient Civilizations</li>
        <li>Medieval History</li>
        <li>Modern History</li>
        <li>History of Pakistan</li>
      </ul>

      <h3>Resources:</h3>
      <ul>
        <li><a href="https://www.history.com/" target="_blank" rel="noreferrer">History.com</a></li>
        <li><a href="https://www.britannica.com/topic/history" target="_blank" rel="noreferrer">Encyclopedia Britannica</a></li>
        <li><a href="https://ocw.mit.edu/courses/history/" target="_blank" rel="noreferrer">MIT OpenCourseWare History</a></li>
      </ul>

      <Link to="/">🔙 Back to Subjects</Link>
    </div>
  );
}

export default HistoryDetail;
