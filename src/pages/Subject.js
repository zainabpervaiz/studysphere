
import React from 'react';
import './Subject.css';

const Subject = () => {
  const subjects = [
    { id: 1, name: 'Mathematics', description: 'Algebra, Geometry, Calculus and more' },
    { id: 2, name: 'Physics', description: 'Mechanics, Thermodynamics, Optics' },
    { id: 3, name: 'Chemistry', description: 'Organic, Inorganic, Physical Chemistry' },
    { id: 4, name: 'Biology', description: 'Cell Biology, Genetics, Ecology' },
  ];

  return (
    <div className="subject-container">
      <h2>Subjects</h2>
      {subjects.map((subject) => (
        <div key={subject.id} className="subject-card">
          <h3>{subject.name}</h3>
          <p>{subject.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Subject;
