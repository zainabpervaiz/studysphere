// src/components/TextEditor.jsx (or .tsx if using TypeScript)
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Required for styling

export default function TextEditor() {
  const [value, setValue] = useState('');

  return (
    <div style={{ margin: '20px' }}>
      <h2>Write your question</h2>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Type your question here..."
      />
    </div>
  );
}
