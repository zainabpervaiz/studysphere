// ✅ Updated src/index.js (StrictMode removed)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { QuestionProvider } from './context/QuestionContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <QuestionProvider>
      <App />
    </QuestionProvider>
  </BrowserRouter>
);
