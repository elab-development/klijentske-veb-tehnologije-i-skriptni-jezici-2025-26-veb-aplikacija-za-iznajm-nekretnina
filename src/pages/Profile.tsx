import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { INekretnina } from '../models/Nekretnina';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  
  
  const userStr = localStorage.getItem('currentUser');
  
  const initialUser = userStr ? JSON.parse(userStr) : { ime: '', email: '', telefon: '' };

  
  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    ime: initialUser.ime,
    email: initialUser.email,
    telefon: initialUser.telefon
  });

  if (!userStr) {
    return <Navigate to="/prijava" replace />;
  }

  const savedIds: number[] = JSON.parse(localStorage.getItem('omiljeneNekretnine') || '[]');

  const sveNekretnine: INekretnina[] = [
    { id: 1, naziv: 'Dvosoban stan', cena: 400, grad: 'Beograd', sobe: 2, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=500&auto=format&fit=crop'] },
    { id: 2, naziv: 'Garsonjera', cena: 250, grad: 'Novi Sad', sobe: 1, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500&auto=format&fit=crop'] },
    { id: 3, naziv: 'Kuća sa dvorištem', cena: 800, grad: 'Niš', sobe: 4, tip: 'Kuća', slike: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop'] },
    { id: 4, naziv: 'Luksuzan stan', cena: 600, grad: 'Beograd', sobe: 3, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500&auto=format&fit=crop'] },
    { id: 5, naziv: 'Trosoban stan', cena: 500, grad: 'Novi Sad', sobe: 3, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=500&auto=format&fit=crop'] },
    { id: 6, naziv: 'Vikendica', cena: 300, grad: 'Niš', sobe: 2, tip: 'Kuća', slike: ['https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=500&auto=format&fit=crop'] }
  ];

  const prikazaneSačuvane = sveNekretnine.filter(n => savedIds.includes(n.id));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/prijava');
  };

  const handleSave = () => {
    localStorage.setItem('currentUser', JSON.stringify(formData));
    setUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <aside className="profile-sidebar">
        <h2>Moj Profil</h2>
        
        {isEditing ? (
          <div className="profile-details" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input 
              type="text" 
              value={formData.ime} 
              onChange={(e) => setFormData({...formData, ime: e.target.value})} 
              style={{ padding: '5px' }}
            />
            <input 
              type="email" 
              value={formData.email} 
              onChange={(e) => setFormData({...formData, email: e.target.value})} 
              style={{ padding: '5px' }}
            />
            <input 
              type="text" 
              value={formData.telefon} 
              onChange={(e) => setFormData({...formData, telefon: e.target.value})} 
              style={{ padding: '5px' }}
            />
          </div>
        ) : (
          <div className="profile-details">
            <p><strong>Ime:</strong> {user.ime}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Telefon:</strong> {user.telefon}</p>
          </div>
        )}

        <div className="profile-actions">
          {isEditing ? (
            <button className="edit-button" style={{ backgroundColor: '#82c385' }} onClick={handleSave}>Sačuvaj</button>
          ) : (
            <button className="edit-button" onClick={() => setIsEditing(true)}>Izmeni podatke</button>
          )}
          <button className="logout-button" onClick={handleLogout}>Odjavi se</button>
        </div>
      </aside>

      <main className="profile-main">
        <h3>Moje sačuvane nekretnine</h3>
        {prikazaneSačuvane.length > 0 ? (
          <div className="properties-grid">
            {prikazaneSačuvane.map(n => (
              <div key={n.id} className="property-card" onClick={() => navigate(`/nekretnina/${n.id}`)} style={{ cursor: 'pointer' }}>
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