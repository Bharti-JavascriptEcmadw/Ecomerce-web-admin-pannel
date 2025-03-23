import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
   
    if (theme === 'dark') {
      document.body.classList.add('dark'); // add hole body class dark  and default sttyling which called light
    } else {
      document.body.classList.remove('dark');  // ligght theme is called default styling
    }
    console.log('Current theme:', theme); // Debugging line


    // Store the selected theme in localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    // Toggle between light and dark theme
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
