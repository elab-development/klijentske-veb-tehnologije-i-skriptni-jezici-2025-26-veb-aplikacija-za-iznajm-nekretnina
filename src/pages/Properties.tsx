import React, { useState } from 'react';
import { INekretnina, NekretninaServis } from '../models/Nekretnina';

const Properties = () => {
  const [podaci] = useState<INekretnina[]>([
    { id: 1, naziv: 'Dvosoban stan', cena: 400, grad: 'Beograd', sobe: 2, tip: 'Stan' },
    { id: 2, naziv: 'Garsonjera', cena: 250, grad: 'Novi Sad', sobe: 1, tip: 'Stan' },
    { id: 3, naziv: 'Kuća sa dvorištem', cena: 800, grad: 'Niš', sobe: 4, tip: 'Kuća' }
  ]);

  const [izabraniGradovi, setIzabraniGradovi] = useState<string[]>([]);
  const [izabraniTipovi, setIzabraniTipovi] = useState<string[]>([]);

  // Logika za filtriranje
  const lista = podaci.filter(n => {
    const gradMatch = izabraniGradovi.length === 0 || izabraniGradovi.includes(n.grad);
    const tipMatch = izabraniTipovi.length === 0 || izabraniTipovi.includes(n.tip);
    return gradMatch && tipMatch;
  });

  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '250px', padding: '10px' }}>
        <h3>Gradovi</h3>
        {['Beograd', 'Novi Sad', 'Niš'].map(g => (
          <div key={g}>
            <input type="checkbox" onChange={() => setIzabraniGradovi(prev => 
              prev.includes(g) ? prev.filter(x => x !== g) : [...prev, g]
            )} /> {g}
          </div>
        ))}
        
        <h3>Tip nekretnine</h3>
        {['Stan', 'Kuća'].map(t => (
          <div key={t}>
            <input type="checkbox" onChange={() => setIzabraniTipovi(prev => 
              prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]
            )} /> {t}
          </div>
        ))}
      </aside>

      <main style={{ flex: 1 }}>
        <h1>Spisak nekretnina</h1>
        {lista.length === 0 ? <p>Nema rezultata.</p> : lista.map(n => (
          <div key={n.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px' }}>
            <h3>{n.naziv}</h3>
            <p>{n.grad} | {n.sobe} sobe | Tip: {n.tip} | Cena: {n.cena}€</p>
          </div>
        ))}
      </main>
    </div>
  );
};
export default Properties;