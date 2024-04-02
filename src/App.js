import React from 'react';
import './App.css';
import './components/Login.css'
import './components/Home.css'
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
     <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
     </Routes>
  );
}

export default App;
