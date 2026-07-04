import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Properties from './pages/Properties';

function App() {
  return (
    <Router>
      <nav style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
        <Link to="/">Početna</Link> |{' '}
        <Link to="/nekretnine">Nekretnine</Link> |{' '}
        <Link to="/prijava">Prijava</Link> |{' '}
        <Link to="/registracija">Registracija</Link>
      </nav>

      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nekretnine" element={<Properties />} />
          <Route path="/prijava" element={<Login />} />
          <Route path="/registracija" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;