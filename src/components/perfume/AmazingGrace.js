import React from 'react';
import NavBar from '../NavBar';

const AmazingGrace = () => {
  return (
    <div className="amazing-grace-container">
      <NavBar />
      <h1 className="perfume-title">Amazing Grace Magnolia, Philosophy</h1>

      <div className="image-container">
        <div className="column">
        <img src="/data/perfumes/magnoliaamazinggracePHILOSOPHY.jpg" alt="Perfume bottle" />
        </div>
        <div className="column">
          <img src="/data/notes/amazingrace.png" alt="Notes of amazing grace perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover Amazing Grace Magnolia by Philosophy</h2>
        <p className="perfume-description">
          Philosophy's most intense version of amazing grace that lasts all day. Intensely concentrated with notes of juicy berries, sustainably sourced rose absolute, and soft musk. This perfume for women has increased longevity for extended wear and exceptional staying power.
        </p>
        <h2 className="perfume-price">$30</h2>
      </div>

      <div>
        <button className="add-list-button">Save to List</button>
      </div>
    </div>
  );
};

export default AmazingGrace;