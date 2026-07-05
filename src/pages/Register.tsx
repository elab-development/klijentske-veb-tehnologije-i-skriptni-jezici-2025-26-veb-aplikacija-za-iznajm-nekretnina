import React from 'react';

const Register = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h2>Registruj se</h2>
      <form>
        <input type="text" placeholder="Ime i prezime" style={{ display: 'block', margin: '10px 0' }} />
        <input type="email" placeholder="Email" style={{ display: 'block', margin: '10px 0' }} />
        <input type="password" placeholder="Lozinka" style={{ display: 'block', margin: '10px 0' }} />
        <button type="submit">Registruj se</button>
      </form>
    </div>
  );
};

export default Register;