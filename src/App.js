import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Screens/Home';
import About from './Screens/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact"/>
      </Routes>
    </Router>
  );
}

export default App;
