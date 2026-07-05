import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  const navigate = useNavigate();
  
  const [unos, setUnos] = useState('');

  const handleSearch = () => {
    if (unos.trim() !== '') {
      
      navigate(`/nekretnine?grad=${unos.trim()}`);
    } else {
      navigate('/nekretnine');
    }
  };

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Unesi grad" 
            className="search-input" 
            value={unos}
            onChange={(e) => setUnos(e.target.value)} 
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()} 
          />
          <button className="search-button" onClick={handleSearch}>
            TRAŽI
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;