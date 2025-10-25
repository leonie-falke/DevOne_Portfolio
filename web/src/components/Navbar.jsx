import React from 'react';
import { Link } from 'react-router-dom';
import { LightMode, DarkMode } from '@mui/icons-material';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = React.useState(document.documentElement.classList.contains("dark"));


  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }
  return (
    <div className="Navigation">
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <DarkMode /> : <LightMode />}
        </button>
      </div>
    </div>
  );
}