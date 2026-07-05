import React from 'react';
import { Navigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const userStr = localStorage.getItem('currentUser');
  
  // Ako korisnik nije prijavljen, automatski ga prebacujemo na Login
  if (!userStr) {
    return <Navigate to="/prijava" replace />;
  }

  const user = JSON.parse(userStr);
  const savedProperties = JSON.parse(localStorage.getItem('omiljeneNekretnine') || '[]');

  return (
    <div className="profile-page">
      {/* Leva strana: Podaci o korisniku */}
      <aside className="profile-sidebar">
        <h2>Moj Profil</h2>
        <div className="profile-details">
          <p><strong>Ime:</strong> {user.ime}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Telefon:</strong> {user.telefon}</p>
        </div>
        <button className="edit-button">Izmeni podatke</button>
      </aside>

      {/* Desna strana: Kartice sačuvanih nekretnina */}
      <main className="profile-main">
        <h3>Moje sačuvane nekretnine</h3>
        <div className="properties-grid">
           {savedProperties.length > 0 ? (
             <p>Ovde će biti kartice tvojih sačuvanih nekretnina.</p>
           ) : (
             <p className="no-saved">Trenutno nemaš sačuvanih oglasa. Idi na stranicu Nekretnine i lajkuj neki stan!</p>
           )}
        </div>
      </main>
    </div>
  );
};

export default Profile;