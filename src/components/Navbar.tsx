import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Ovde ćemo dodati CSS
import logo from '../assets/logo.png';

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('currentUser')!== null;
  return (
    <nav className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <div className="nav-links">
        <Link to="/">Početna</Link>
        <Link to="/nekretnine">Nekretnine</Link>
        <Link to="/kontakt">Kontakt</Link>
        <Link to={isLoggedIn ? "/profil" : "/prijava"}>Moj profil</Link>
      </div>
    </nav>
  );
};

export default Navbar;