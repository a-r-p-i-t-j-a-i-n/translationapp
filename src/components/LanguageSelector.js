// LanguageSelector.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LanguageSelector = ({ selectedLang, onChange }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await axios.get('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', {
          headers: {
            'X-RapidAPI-Key': '81d737b55amshc44b6d0091e6985p1af059jsn3d1a1e0493b5',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
          },
        });
        setLanguages(response.data.data.languages);
      } catch (error) {
        console.error('Error fetching languages:', error);
      }
    };

    fetchLanguages();
  }, []);

  return (
    <select value={selectedLang} onChange={(e) => onChange(e.target.value)}>
      <option value="">Select Language</option>
      {languages.map((lang) => (
        <option key={lang.language} value={lang.language}>
          {lang.language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
