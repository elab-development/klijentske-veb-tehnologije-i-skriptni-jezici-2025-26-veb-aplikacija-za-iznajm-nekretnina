import React, { useState } from 'react';
import { INekretnina, NekretninaServis } from '../models/Nekretnina';

const Properties = () => {
  const podaci: INekretnina[] = [
    { id: 1, naziv: 'Dvosoban stan', cena: 400, grad: 'Beograd' },
    { id: 2, naziv: 'Garsonjera', cena: 250, grad: 'Novi Sad' },
    { id: 3, naziv: 'Trosoban stan', cena: 600, grad: 'Beograd' },
    { id: 4, naziv: 'Kuća', cena: 800, grad: 'Niš' }
  ];

  const servis = new NekretninaServis(podaci);
  
  const [filterGrad, setFilterGrad] = useState('');
  const [stranica, setStranica] = useState(1);
  const poStranici = 2; // Prikazujemo po 2 nekretnine

  // Logika filtriranja
  let lista = filterGrad ? servis.filtrirajPoGradu(filterGrad) : servis.dohvatiSve();

  // Logika paginacije
  const indeksPoslednjeNekretnine = stranica * poStranici;
  const indeksPrveNekretnine = indeksPoslednjeNekretnine - poStranici;
  const trenutneNekretnine = lista.slice(indeksPrveNekretnine, indeksPoslednjeNekretnine);

  return (
    <div>
      <h1>Spisak nekretnina</h1>
      
      <input 
        type="text" 
        placeholder="Filtriraj po gradu..." 
        value={filterGrad}
        onChange={(e) => { setFilterGrad(e.target.value); setStranica(1); }}
        style={{ padding: '8px', marginBottom: '20px' }}
      />

      {trenutneNekretnine.map(n => (
        <div key={n.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{n.naziv}</h3>
          <p>Grad: {n.grad} | Cena: {n.cena}€</p>
        </div>
      ))}

      {/* Dugmad za paginaciju */}
      <div>
        <button onClick={() => setStranica(1)} disabled={stranica === 1}>1</button>
        <button onClick={() => setStranica(2)} disabled={stranica === 2}>2</button>
      </div>
    </div>
  );
};

export default Properties;