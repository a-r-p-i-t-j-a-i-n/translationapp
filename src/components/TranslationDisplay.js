// src/components/TranslationDisplay.js
import React from 'react';

const TranslationDisplay = ({ translatedText }) => {
  return (
    <div>
      <h3>Translated Text:</h3>
      <p>{translatedText}</p>
    </div>
  );
};

export default TranslationDisplay;
