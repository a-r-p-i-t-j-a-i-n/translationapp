// src/components/TextInput.js
import React from 'react';

const TextInput = ({ value, onChange }) => {
  return (
    <textarea
      rows={4}
      cols={50}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter text to translate..."
    />
  );
};

export default TextInput;
