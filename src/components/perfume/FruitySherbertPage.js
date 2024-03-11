import React, { useState } from 'react';
import FruitySherbertScoopNotes from '../../data/notes/piecesherbertscoop.png';
import FruitySherbertScoopPerfume from '../../data/perfumes/fruitysherbertscroopB&BW.jpg';

const FruitySherbertScoopPage = ({ perfumeName, setSavedPerfumes }) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveToList = () => {
    setSavedPerfumes((prevPerfumes) => [...prevPerfumes, perfumeName]);
    setIsSaved(true);
  };

  return (
    <div className="perfume-page-container">
      <h1 className="perfume-title">{perfumeName}</h1>

      <div className="image-container">
        <div className="perfume-column">
          <img className="bottle-image" src={FruitySherbertScoopPerfume} alt="Fruity Sherbert Scoop Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={FruitySherbertScoopNotes} alt="Notes of Fruity Sherbert Scoop perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Bath & Body Works</h2>
        <p className="perfume-description">
          Smells like a sugary-sweet scoop of summer.
        </p>
        <h2 className="perfume-price">$26</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default FruitySherbertScoopPage;
