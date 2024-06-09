import React, { useState } from 'react';
import Sun from './sun';
import Moon from './moon';

export default function DarkModeButton() {
  let [curentTheme, setCurentTheme] = useState('ligth');
  function toggleTheme() {
    let toggleMode = curentTheme === 'ligth' ? 'dark' : 'ligth';
    let select = document.querySelector('html') as HTMLElement | null;

    if (select) {
      setCurentTheme(toggleMode);
      select.setAttribute('data-theme', toggleMode);
    }
  }

  return (
    <>
      {curentTheme === 'dark' ? (
        <Sun
          handle={() => {
            toggleTheme();
          }}
        ></Sun>
      ) : (
        <Moon
          handle={() => {
            toggleTheme();
          }}
        ></Moon>
      )}
    </>
  );
}
