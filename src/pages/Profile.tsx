import React, { useState, useEffect } from 'react';
import { INekretnina } from '../models/Nekretnina';

const Profile = () => {
  const [omiljene, setOmiljene] = useState<number[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('omiljeneNekretnine');
    if (saved) setOmiljene(JSON.parse(saved));
  }, []);

  return (
    <div>
      <h1>Zdravo, Marko!</h1>
      <h3>Sačuvani oglasi</h3>
      {omiljene.length === 0 ? (
        <p>Nema sačuvanih oglasa.</p>
      ) : (
        <div>
          {/* Ovde ćemo kasnije prikazati te nekretnine */}
          <p>Broj sačuvanih nekretnina: {omiljene.length}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;