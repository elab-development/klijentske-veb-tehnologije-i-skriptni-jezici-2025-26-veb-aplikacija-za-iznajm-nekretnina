import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Uspešna registracija! Sada se prijavite.');
    navigate('/login'); // Prebacuje na login posle registracije
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Registruj se</h2>
        <form className="auth-form" onSubmit={handleRegister}>
          <input type="text" placeholder="Ime i prezime" className="auth-input" required />
          <input type="email" placeholder="Email" className="auth-input" required />
          <input type="tel" placeholder="Broj telefona" className="auth-input" required />
          <input type="password" placeholder="Lozinka" className="auth-input" required />
          <button type="submit" className="auth-button">Registruj se</button>
        </form>
      </div>
    </div>
  );
};

export default Register;