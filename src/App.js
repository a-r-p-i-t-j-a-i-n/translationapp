// App.js
import React, { useState } from 'react';
import Translator from './components/Translator';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

const App = () => {
  const [sourceLang, setSourceLang] = useState('');
  const [targetLang, setTargetLang] = useState('');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(translatedText);
    alert('Text copied to clipboard!');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
      <div className="mode-toggle">
        <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
      <h1 className={darkMode ? 'dark-mode-heading' : ''}>Translation App</h1>
      <div className="select-container">
        <h2>Select Source Language:</h2>
        <LanguageSelector selectedLang={sourceLang} onChange={setSourceLang} />
      </div>
      <div className="select-container">
        <h2>Select Target Language:</h2>
        <LanguageSelector selectedLang={targetLang} onChange={setTargetLang} />
      </div>
      <h2>Write here :</h2>
      <textarea
        rows={4}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter text to translate..."
        className={`text-area ${darkMode ? 'dark-mode-text' : ''}`}
      />
      <button onClick={() => Translator.translateText(sourceLang, targetLang, inputText, setTranslatedText)}>
        Translate
      </button>
      {translatedText && (
        <div className={`translated-text ${darkMode ? 'dark-mode-text' : ''}`}>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
          <button className="copy-button" onClick={handleCopy}>Copy</button>
        </div>
      )}
    </div>
  );
};

export default App;
