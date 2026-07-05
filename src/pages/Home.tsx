import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="search-box">
          <input type="text" placeholder="Unesi grad" className="search-input" />
          <button className="search-button">TRAŽI</button>
        </div>
      </div>
    </div>
  );
};

export default Home;