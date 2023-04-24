import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons' 

function ThemeSwitcherButton({ theme, onThemeChange }) {

  return (
    <button
      className=""
      onClick={(onThemeChange)}
    >
      {theme === 'light' ? <><FontAwesomeIcon icon={faMoon}/> Dark Mode</> : <><FontAwesomeIcon icon={faSun} /> Light Mode</>}
    </button>
  );
}

export default ThemeSwitcherButton;