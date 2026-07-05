import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();

  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [telefon, setTelefon] = useState('');
  const [lozinka, setLozinka] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    const noviKorisnik = { ime, email, telefon, lozinka };
    localStorage.setItem('registeredUser', JSON.stringify(noviKorisnik));

    alert('Uspešna registracija! Sada se možete prijaviti.');
    navigate('/prijava'); // Prebacuje na login posle registracije
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Registruj se</h2>
        <form className="auth-form" onSubmit={handleRegister}>
          <input 
            type="text" 
            placeholder="Ime i prezime" 
            className="auth-input" 
            value={ime}
            onChange={(e) => setIme(e.target.value)}
            required 
          />
          <input 
            type="email" 
            placeholder="Email" 
            className="auth-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <input 
            type="tel" 
            placeholder="Broj telefona" 
            className="auth-input" 
            value={telefon}
            onChange={(e) => setTelefon(e.target.value)}
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
          <button type="submit" className="auth-button">Registruj se</button>
        </form>
      </div>
    </div>
  );
};

export default Register;