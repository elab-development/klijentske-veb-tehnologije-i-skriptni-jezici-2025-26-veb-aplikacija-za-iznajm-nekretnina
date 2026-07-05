import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Uvozimo našu komponentu
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Properties from './pages/Properties';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nekretnine" element={<Properties />} />
          <Route path="/prijava" element={<Login />} />
          <Route path="/registracija" element={<Register />} />
          <Route path="/profil" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;