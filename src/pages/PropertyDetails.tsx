import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { INekretnina } from '../models/Nekretnina';
import './PropertyDetails.css';

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const sveNekretnine: INekretnina[] = [
    { id: 1, naziv: 'Dvosoban stan', cena: 400, grad: 'Beograd', sobe: 2, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=500&auto=format&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1de2d96674?q=80&w=500&auto=format&fit=crop'] },
    { id: 2, naziv: 'Garsonjera', cena: 250, grad: 'Novi Sad', sobe: 1, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500&auto=format&fit=crop', 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500&auto=format&fit=crop'] },
    { id: 3, naziv: 'Kuća sa dvorištem', cena: 800, grad: 'Niš', sobe: 4, tip: 'Kuća', slike: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop', 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=500&auto=format&fit=crop'] },
    { id: 4, naziv: 'Luksuzan stan', cena: 600, grad: 'Beograd', sobe: 3, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500&auto=format&fit=crop', 'https://images.unsplash.com/photo-1502672260266-1c1de2d96674?q=80&w=500&auto=format&fit=crop'] },
    { id: 5, naziv: 'Trosoban stan', cena: 500, grad: 'Novi Sad', sobe: 3, tip: 'Stan', slike: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=500&auto=format&fit=crop', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=500&auto=format&fit=crop'] },
    { id: 6, naziv: 'Vikendica', cena: 300, grad: 'Niš', sobe: 2, tip: 'Kuća', slike: ['https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=500&auto=format&fit=crop', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500&auto=format&fit=crop'] }
  ];

  const stan = sveNekretnine.find(n => n.id === Number(id));
  
  // State za sliku koja je trenutno prikazana (inicijalno prva slika)
  const [glavnaSlika, setGlavnaSlika] = useState(stan ? stan.slike[0] : '');

  if (!stan) {
    return (
      <div className="not-found">
        <h2>Nekretnina nije pronađena</h2>
        <button onClick={() => navigate('/nekretnine')}>Nazad na ponudu</button>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="details-content">
        <div className="details-image-wrapper">
          <img src={glavnaSlika} alt={stan.naziv} className="details-main-image" />
          
          {/* Galerija malih slika ispod glavne */}
          <div className="gallery">
            {stan.slike.map((url, index) => (
              <img 
                key={index} 
                src={url} 
                alt={`Slika ${index + 1}`} 
                className="gallery-thumbnail" 
                onClick={() => setGlavnaSlika(url)} 
              />
            ))}
          </div>
        </div>

        <div className="details-info-wrapper">
          <h2>{stan.naziv}</h2>
          <p className="details-price">{stan.cena}€ <span>/ mesečno</span></p>
          
          <div className="details-specs">
            <p><strong>📍 Grad:</strong> {stan.grad}</p>
            <p><strong>🚪 Broj soba:</strong> {stan.sobe}</p>
            <p><strong>🏢 Tip:</strong> {stan.tip}</p>
          </div>

          <div className="details-description">
            <h3>Opis</h3>
            <p>Ova predivna nekretnina ({stan.tip.toLowerCase()}) nalazi se na odličnoj lokaciji u gradu {stan.grad}. Opremljena je modernim nameštajem, ima puno prirodne svetlosti i idealna je za udoban život.</p>
          </div>

          <button className="contact-owner-btn" onClick={() => navigate('/kontakt')}>
            Zakaži razgledanje
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;