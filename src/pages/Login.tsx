import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    localStorage.setItem('currentUser', JSON.stringify({
      ime: 'Petar Petrović',
      email: email,
      telefon: '060/123-4567'
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
          <input type="password" placeholder="Lozinka" className="auth-input" required />
          <button type="submit" className="auth-button">Prijavi se</button>
        </form>
        
        {/* Novi deo koji si tražio! */}
        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          Nemate nalog? <Link to="/registracija" style={{ color: '#82c385', fontWeight: 'bold', textDecoration: 'none' }}>Napravite nalog</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;