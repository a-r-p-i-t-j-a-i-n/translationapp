// Translator.js
import axios from 'axios';

const Translator = {
  translateText: async (sourceLang, targetLang, inputText, setTranslatedText) => {
    try {
      // Detect source language if set to 'auto'
      if (sourceLang === 'auto') {
        const detectedLang = await Translator.detectLanguage(inputText);
        if (detectedLang) sourceLang = detectedLang;
      }

      const encodedParams = new URLSearchParams();
      encodedParams.set('q', inputText);
      encodedParams.set('target', targetLang);
      encodedParams.set('source', sourceLang);

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '81d737b55amshc44b6d0091e6985p1af059jsn3d1a1e0493b5',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        },
        data: encodedParams,
      };

      const response = await axios.request(options);
      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
    }
  },

  detectLanguage: async (text) => {
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set('q', text);

      const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '81d737b55amshc44b6d0091e6985p1af059jsn3d1a1e0493b5',
          'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
        },
        data: encodedParams,
      };

      const response = await axios.request(options);
      return response.data.data.detections[0][0].language;
    } catch (error) {
      console.error('Error detecting language:', error);
      return null;
    }
  },
};

export default Translator;
