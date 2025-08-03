
import React, { createContext, useState } from 'react';

export const QuestionContext = createContext();

export function QuestionProvider({ children }) {
  const [questions, setQuestions] = useState([]);

  const addQuestion = (newQuestion) => {
    setQuestions((prev) => [...prev, newQuestion]);
  };

  return (
    <QuestionContext.Provider value={{ questions, addQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
}
