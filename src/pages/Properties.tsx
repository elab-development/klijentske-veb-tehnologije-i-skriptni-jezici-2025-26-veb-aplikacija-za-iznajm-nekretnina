import React from 'react';
import { INekretnina, NekretninaServis } from '../models/Nekretnina';

const Properties = () => {
  // Simulirani podaci
  const podaci: INekretnina[] = [
    { id: 1, naziv: 'Dvosoban stan', cena: 400, grad: 'Beograd' },
    { id: 2, naziv: 'Garsonjera', cena: 250, grad: 'Novi Sad' }
  ];

  const servis = new NekretninaServis(podaci);
  const lista = servis.dohvatiSve();

  return (
    <div>
      <h1>Spisak nekretnina</h1>
      {lista.map(n => (
        <div key={n.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{n.naziv}</h3>
          <p>Grad: {n.grad} | Cena: {n.cena}€</p>
        </div>
      ))}
    </div>
  );
};

export default Properties;