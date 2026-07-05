import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { INekretnina } from '../models/Nekretnina';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const userStr = localStorage.getItem('currentUser');
  
  // Ako korisnik nije prijavljen, automatski ga prebacujemo na Login
  if (!userStr) {
    return <Navigate to="/prijava" replace />;
  }

  const user = JSON.parse(userStr);
  
  // Učitavamo ID-jeve lajkovanih nekretnina (npr. [1, 3])
  const savedIds: number[] = JSON.parse(localStorage.getItem('omiljeneNekretnine') || '[]');

  // Kompletna baza podataka (ista kao u Properties.tsx) kako bi profil znao detalje o stanovima
  const sveNekretnine: INekretnina[] = [
     { id: 1, naziv: 'Dvosoban stan', cena: 400, grad: 'Beograd', sobe: 2, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&auto=format&fit=crop&w=500'] },
    { id: 2, naziv: 'Garsonjera', cena: 250, grad: 'Novi Sad', sobe: 1, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&auto=format&fit=crop&w=500','https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&auto=format&fit=crop&w=500','https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&auto=format&fit=crop&w=500'] },
    { id: 3, naziv: 'Kuća sa dvorištem', cena: 800, grad: 'Niš', sobe: 4, tip: 'Kuća', slike: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&auto=format&fit=crop&w=500'] },
    { id: 4, naziv: 'Luksuzan stan', cena: 600, grad: 'Beograd', sobe: 3, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&auto=format&fit=crop&w=500']  },
    { id: 5, naziv: 'Trosoban stan', cena: 500, grad: 'Novi Sad', sobe: 3, tip: 'Stan', slike:['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&auto=format&fit=crop&w=500'] },
    { id: 6, naziv: 'Vikendica', cena: 300, grad: 'Niš', sobe: 2, tip: 'Kuća', slike:['https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&auto=format&fit=crop&w=500','https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&auto=format&fit=crop&w=500']  }
  ];

  // Filtriramo samo one nekretnine čiji se ID nalazi u nizu sačuvanih
  const prikazaneSačuvane = sveNekretnine.filter(n => savedIds.includes(n.id));

  // Funkcija za odjavu korisnika
  const handleLogout = () => {
    localStorage.removeItem('currentUser'); // Brišemo korisnika iz memorije
    navigate('/prijava'); // Vraćamo ga na prijavu
  };

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
        <div className="profile-actions">
          <button className="edit-button">Izmeni podatke</button>
          <button className="logout-button" onClick={handleLogout}>Odjavi se</button>
        </div>
      </aside>

      {/* Desna strana: Kartice sačuvanih nekretnina */}
      <main className="profile-main">
        <h3>Moje sačuvane nekretnine</h3>
        {prikazaneSačuvane.length > 0 ? (
          <div className="properties-grid">
            {prikazaneSačuvane.map(n => (
              <div key={n.id} className="property-card">
                <div className="card-image-container">
                  <img src={n.slike[0]} alt={n.naziv} className="card-image" />
                </div>
                <div className="card-info">
                  <h3>{n.naziv}</h3>
                  <p className="card-location">{n.grad} | {n.sobe} sobe | {n.tip}</p>
                  <p className="card-price">Cena: {n.cena}€</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-saved">Trenutno nemaš sačuvanih oglasa. Idi na stranicu Nekretnine i lajkuj neki stan!</p>
        )}
      </main>
    </div>
  );
};

export default Profile;