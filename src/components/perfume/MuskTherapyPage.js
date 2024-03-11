import React, { useState } from 'react';
import MuskTherapyInitioNotes from '../../data/notes/musktherapy.png';
import MuskTherapyInitioImage from '../../data/perfumes/musktherapyINITIO.jpg';

const MuskTherapyPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={MuskTherapyInitioImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={MuskTherapyInitioNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Initio</h2>
        <p className="perfume-description">
          Natural white sandalwood blended with an overdose of white and pink musk come together to create an addictive milky and velvety accord. This fragrance restores peace of mind and returns you to a state of well-being.
        </p>
        <h2 className="perfume-price">$390</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default MuskTherapyPage;
