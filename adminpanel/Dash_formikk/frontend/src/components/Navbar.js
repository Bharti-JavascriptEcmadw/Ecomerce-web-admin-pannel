import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaBars } from 'react-icons/fa'; // Import the Hamburger Icon

const Navbar = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 left-0  w-full lg:left-64 lg:w-[calc(100%-16rem)] p-4 bg-green-900 text-white flex justify-between items-center dark:bg-black z-20">
      {/* Left Section: Sidebar Toggle and Title */}
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 bg-green-400 rounded"
        >
          <FaBars size={20} /> {/* Hamburger Icon */}
        </button>
        <span className="font-bold text-xl">My Dashboard</span>
      </div>

      {/* Right Section: Theme Toggle */}
      <div>
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-700 rounded text-white dark:bg-gray-500"
        >
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
