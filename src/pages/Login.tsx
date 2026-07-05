import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '50px' }}>
      <h2>Prijavi se</h2>
      <form>
        <input type="email" placeholder="Email" style={{ display: 'block', margin: '10px 0' }} />
        <input type="password" placeholder="Lozinka" style={{ display: 'block', margin: '10px 0' }} />
        <button type="submit">Prijavi se</button>
      </form>
    </div>
  );
};

export default Login;