import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Subject.css";

const Subject = () => {
  const subjects = [
    { id: 1, name: "Mathematics", description: "Algebra, Geometry, Calculus", path: "/subject/mathematics" },
    { id: 2, name: "Physics", description: "Mechanics, Thermodynamics, Optics", path: "/subject/physics" },
    { id: 3, name: "Chemistry", description: "Organic, Inorganic, Physical Chemistry", path: "/subject/chemistry" },
    { id: 4, name: "Biology", description: "Cell Biology, Genetics, Ecology", path: "/subject/biology" },
    { id: 5, name: "English", description: "Grammar, Literature, Writing Skills", path: "/subject/english" },
    { id: 6, name: "Astronomy", description: "Stars, Planets, Galaxies", path: "/subject/astronomy" },
    { id: 7, name: "History", description: "World History, Modern History, Ancient Civilizations", path: "/subject/history" },
    { id: 8, name: "Geography", description: "Physical, Human, Environmental Geography", path: "/subject/geography" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const subjectsPerPage = 3;

  const indexOfLastSubject = currentPage * subjectsPerPage;
  const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;
  const currentSubjects = subjects.slice(indexOfFirstSubject, indexOfLastSubject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="subject-container">
      <h2 className="subject-title">Our Subjects</h2>

      <div className="subject-grid">
        {currentSubjects.map((subject) => (
          <Link to={subject.path} key={subject.id} className="subject-card">
            <h3>{subject.name}</h3>
            <p>{subject.description}</p>
          </Link>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(subjects.length / subjectsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Subject;
