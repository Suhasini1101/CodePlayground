import React, { useState } from 'react';
import './Theme.css';

function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
    const body = document.body;
    body.classList.toggle('dark-mode');
  };

  return (
    <button className={`theme-toggle ${darkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default Theme;


