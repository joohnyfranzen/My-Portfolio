import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Screens/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/"/>
        <Route path="/"/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
