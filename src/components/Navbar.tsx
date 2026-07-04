import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '10px' }}>Početna</Link>
      <Link to="/nekretnine" style={{ color: '#fff', marginRight: '10px' }}>Nekretnine</Link>
      <Link to="/prijava" style={{ color: '#fff', marginRight: '10px' }}>Prijava</Link>
      <Link to="/registracija" style={{ color: '#fff' }}>Registracija</Link>
    </nav>
  );
};

export default Navbar;