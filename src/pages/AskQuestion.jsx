
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionContext } from '../context/QuestionContext';

function AskQuestion() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const { addQuestion } = useContext(QuestionContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !details.trim()) {
      alert('Please fill in both fields');
      return;
    }

    const newQuestion = {
      id: Date.now(),
      title,
      details
    };

    addQuestion(newQuestion);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ask a New Question</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter question title"
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label>Details:</label><br />
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Enter question details"
            rows="5"
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
}

export default AskQuestion;
