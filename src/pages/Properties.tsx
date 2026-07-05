import React, { useState } from 'react';
import { INekretnina } from '../models/Nekretnina';
import './Properties.css';

const Properties = () => {
  const [podaci] = useState<INekretnina[]>([
    { id: 1, naziv: 'Dvosoban stan', cena: 400, grad: 'Beograd', sobe: 2, tip: 'Stan', slika: 'https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1097&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, naziv: 'Garsonjera', cena: 250, grad: 'Novi Sad', sobe: 1, tip: 'Stan', slika: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&auto=format&fit=crop&w=500' },
    { id: 3, naziv: 'Kuća sa dvorištem', cena: 800, grad: 'Niš', sobe: 4, tip: 'Kuća', slika: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&auto=format&fit=crop&w=500' },
    { id: 4, naziv: 'Luksuzan stan', cena: 600, grad: 'Beograd', sobe: 3, tip: 'Stan', slika: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&auto=format&fit=crop&w=500' },
    { id: 5, naziv: 'Trosoban stan', cena: 500, grad: 'Novi Sad', sobe: 3, tip: 'Stan', slika: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&auto=format&fit=crop&w=500' },
    { id: 6, naziv: 'Vikendica', cena: 300, grad: 'Niš', sobe: 2, tip: 'Kuća', slika: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&auto=format&fit=crop&w=500' }
  ]);

  const [izabraniGradovi, setIzabraniGradovi] = useState<string[]>([]);
  const [izabraniTipovi, setIzabraniTipovi] = useState<string[]>([]);
  const [meseci, setMeseci] = useState<number>(1);
  const [stranica, setStranica] = useState(1);

  const [omiljene, setOmiljene] = useState<number[]>(() => {
    const saved = localStorage.getItem('omiljeneNekretnine');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleLajk = (id: number) => {
    const noviNiz = omiljene.includes(id) ? omiljene.filter(i => i !== id) : [...omiljene, id];
    setOmiljene(noviNiz);
    localStorage.setItem('omiljeneNekretnine', JSON.stringify(noviNiz));
  };

  const filtriranaLista = podaci.filter(n => {
    const gradMatch = izabraniGradovi.length === 0 || izabraniGradovi.includes(n.grad);
    const tipMatch = izabraniTipovi.length === 0 || izabraniTipovi.includes(n.tip);
    return gradMatch && tipMatch;
  });

  const poStranici = 3;
  const trenutneNekretnine = filtriranaLista.slice((stranica - 1) * poStranici, stranica * poStranici);
  const ukupanBrojStranica = Math.ceil(filtriranaLista.length / poStranici);

  return (
    <div className="properties-container">
      <aside className="sidebar">
        <h2>Filteri</h2>
        
        <div className="filter-group">
          <h3>Gradovi</h3>
          {['Beograd', 'Novi Sad', 'Niš'].map(g => (
            <label key={g} className="checkbox-label">
              <input type="checkbox" onChange={() => {
                setIzabraniGradovi(prev => prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]);
                setStranica(1);
              }} /> {g}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h3>Tip nekretnine</h3>
          {['Stan', 'Kuća'].map(t => (
            <label key={t} className="checkbox-label">
              <input type="checkbox" onChange={() => {
                setIzabraniTipovi(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
                setStranica(1);
              }} /> {t}
            </label>
          ))}
        </div>

        <div className="filter-group">
          <h3>Zakup (meseci)</h3>
          <input type="number" min="1" value={meseci} onChange={(e) => setMeseci(Number(e.target.value) || 1)} className="kalkulator-input"/>
        </div>
      </aside>

      {/* Glavni deo - Kartice */}
      <main className="main-content">
        {filtriranaLista.length === 0 ? (
          <p className="no-results">Nema rezultata za izabrane filtere.</p>
        ) : (
          <>
            <div className="properties-grid">
              {trenutneNekretnine.map(n => (
                <div key={n.id} className="property-card">
                  <div className="card-image-container">
                    <img src={n.slika} alt={n.naziv} className="card-image" />
                    <button className="like-button" onClick={() => toggleLajk(n.id)}>
                      {omiljene.includes(n.id) ? '❤️' : '🤍'}
                    </button>
                  </div>
                  <div className="card-info">
                    <h3>{n.naziv}</h3>
                    <p className="card-location">{n.grad} | {n.sobe} sobe | {n.tip}</p>
                    <p className="card-price">Cena: {n.cena * meseci}€ <span>(za {meseci} mes.)</span></p>
                  </div>
                </div>
              ))}
            </div>

            {/* Paginacija */}
            <div className="pagination">
              {Array.from({ length: ukupanBrojStranica }, (_, i) => i + 1).map(broj => (
                <button 
                  key={broj} 
                  className={`page-button ${stranica === broj ? 'active' : ''}`}
                  onClick={() => setStranica(broj)}
                >
                  {broj}
                </button>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Properties;