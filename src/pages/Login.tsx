import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [lozinka, setLozinka] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Proveravamo da li imamo registrovanog korisnika u memoriji
    const registeredUserStr = localStorage.getItem('registeredUser');
    
    if (registeredUserStr) {
      const registeredUser = JSON.parse(registeredUserStr);
      
      // Provera kredencijala
      if (registeredUser.email === email && registeredUser.lozinka === lozinka) {
        localStorage.setItem('currentUser', JSON.stringify(registeredUser));
        navigate('/profil');
        return;
      } else {
        alert('Netačan email ili lozinka!');
        return;
      }
    }

    localStorage.setItem('currentUser', JSON.stringify({
      ime: 'Korisnik Sajta',
      email: email,
      telefon: '060/000-000'
    }));

    navigate('/profil');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Prijavi se</h2>
        <form className="auth-form" onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            className="auth-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="password" 
            placeholder="Lozinka" 
            className="auth-input" 
            value={lozinka}
            onChange={(e) => setLozinka(e.target.value)}
            required 
          />
          <button type="submit" className="auth-button">Prijavi se</button>
        </form>
        
        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          Nemate nalog? <Link to="/registracija" style={{ color: '#82c385', fontWeight: 'bold', textDecoration: 'none' }}>Napravite nalog</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;