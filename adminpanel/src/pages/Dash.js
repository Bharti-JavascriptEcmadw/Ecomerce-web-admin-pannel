// import React, { useState } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

// import { ThemeProvider } from './context/ThemeContext';
// import Contact from './pages/Contact';
// import AddColor from "./components/AddColor";
import Login from './Login';
import Register from './Register';
// import About from './pages/About';
// import AddSize from './components/AddSize';

function Dash() {

  return (
    <>
      <BrowserRouter>
<Routes>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
</Routes>
  
      </BrowserRouter>
    </>
  );
}

export default Dash;