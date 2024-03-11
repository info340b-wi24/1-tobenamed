import React, { useState } from 'react';
import DolceGabbanaLightBlueNotes from '../../data/notes/lightblue.png';
import DolceGabbanaLightBlueImage from '../../data/perfumes/light blue.jpg';

const LightBluePage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={DolceGabbanaLightBlueImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={DolceGabbanaLightBlueNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Dolce & Gabbana</h2>
        <p className="perfume-description">
          A fresh and lively fragrance with top notes of Sicilian lemon and green apple, a floral heart of jasmine and white rose, and a warm base of cedarwood and amber. It exudes a breezy and summery vibe, perfect for casual and daytime wear.
        </p>
        <h2 className="perfume-price">$75</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default LightBluePage;
