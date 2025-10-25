import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { LightMode, DarkMode } from '@mui/icons-material';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = React.useState(document.documentElement.classList.contains("dark"));


  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    setIsDarkMode(document.documentElement.classList.contains("dark"));
  }
  return (
    <div className="sticky top-0 z-50 bg-[#faf4ed] dark:bg-[#232136] text-[#575279] dark:text-[#e0def4] shadow-md shadow-[#9893a5] dark:shadow-[#6e6a86]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <HashLink smooth to="/#home">Home</HashLink>
        <HashLink smooth to="/#about">About me</HashLink>
        <HashLink smooth to="/#education">Education</HashLink>
        <HashLink smooth to="/#skills">Skills</HashLink>
        <HashLink smooth to="/#projects">Projects</HashLink>
        <HashLink smooth to="/#contact">Contact</HashLink>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <DarkMode /> : <LightMode />}
        </button>
      </div>
      </div>
  );
}