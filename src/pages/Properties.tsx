import React, { useState } from 'react';
import { INekretnina, NekretninaServis } from '../models/Nekretnina';

const Properties = () => {
  
  const podaci: INekretnina[] = [
    { id: 1, naziv: 'Dvosoban stan', cena: 400, grad: 'Beograd' },
    { id: 2, naziv: 'Garsonjera', cena: 250, grad: 'Novi Sad' },
    { id: 3, naziv: 'Trosoban stan', cena: 600, grad: 'Beograd' }
  ];

  const servis = new NekretninaServis(podaci);
  
  
  const [filterGrad, setFilterGrad] = useState('');

  
  const listaZaPrikaz = filterGrad 
    ? servis.filtrirajPoGradu(filterGrad) 
    : servis.dohvatiSve();

  return (
    <div>
      <h1>Spisak nekretnina</h1>
      
      {/* Input za filter */}
      <input 
        type="text" 
        placeholder="Filtriraj po gradu..." 
        value={filterGrad}
        onChange={(e) => setFilterGrad(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px' }}
      />

      {listaZaPrikaz.map(n => (
        <div key={n.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{n.naziv}</h3>
          <p>Grad: {n.grad} | Cena: {n.cena}€</p>
        </div>
      ))}
    </div>
  );
};

export default Properties;