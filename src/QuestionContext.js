// src/QuestionContext.js
import React, { createContext, useContext, useState } from "react";

export const QuestionContext = createContext();

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState([
    { id: 1, title: "What is React Hooks?", body: "", category: "Web Development", tags: ["React"], likes: 0, comments: [] },
    { id: 2, title: "Explain Photosynthesis process", body: "", category: "Biology", tags: ["Plants"], likes: 0, comments: [] },
    { id: 3, title: "What is Newton's Third Law?", body: "", category: "Physics", tags: ["Laws"], likes: 0, comments: [] },
  ]);

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};

export const useQuestions = () => {
  return useContext(QuestionContext);
};
