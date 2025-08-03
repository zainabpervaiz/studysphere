import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { QuestionProvider } from './context/QuestionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </BrowserRouter>
  </React.StrictMode>
);
