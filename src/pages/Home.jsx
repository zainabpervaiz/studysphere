
import React, { useContext, useState } from 'react';
import { QuestionContext } from '../context/QuestionContext';
import { Link } from 'react-router-dom';

function Home() {
  const { questions } = useContext(QuestionContext);
  const [index, setIndex] = useState(0);

  if (questions.length === 0) {
    return (
      <div>
        <h2>All Questions</h2>
        <p>No questions yet.</p>
        <Link to="/ask">
          <button>Ask a Question</button>
        </Link>
      </div>
    );
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % questions.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + questions.length) % questions.length);
  };

  const current = questions[index];

  return (
    <div style={styles.container}>
      <h2>Question {index + 1} of {questions.length}</h2>
      <h3>{current.title}</h3>
      <p>{current.details}</p>

      <div style={styles.controls}>
        <button onClick={prevSlide} style={styles.btn}>Previous</button>
        <button onClick={nextSlide} style={styles.btn}>Next</button>
      </div>

      <Link to="/ask">
        <button style={{ marginTop: '20px' }}>Ask a Question</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    margin: '40px auto',
    maxWidth: '600px',
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  controls: {
    marginTop: '15px',
  },
  btn: {
    padding: '8px 16px',
    margin: '0 10px',
    cursor: 'pointer',
  },
};

export default Home;
