import React, { useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Sidebar  from './components/Sidebar'; 
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Contact from './pages/Contact';
import AddColor from "./components/AddColor";

import About from './pages/About';
import AddSize from './components/AddSize';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <ThemeProvider>
      <BrowserRouter>
      <div className="flex-1 flex flex-col min-h-screen">
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className="flex-1 flex flex-col lg:ml-64">

            <Navbar toggleSidebar={toggleSidebar}  className={"fixed top:0"}/>
            <main className="flex-1 mt-16 border-3 border-black">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/colors/add" element={<AddColor />} />
                <Route path="/size/add" element={<AddSize/>}/>

              </Routes>
            </main>
            <Footer />
          </div>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;