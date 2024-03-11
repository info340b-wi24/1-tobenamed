import React, { useState } from 'react';
import ByTheFirePlaceNotes from '../../data/notes/bythefireplace.png';
import ByTheFirePlacePerfume from '../../data/perfumes/bythefireplaceMAISONMARTIN.jpg';

const ByTheFirePlacePage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={ByTheFirePlacePerfume} alt="By the FirePlace Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={ByTheFirePlaceNotes} alt="Notes of By the FirePlace perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Maison Margiela</h2>
        <p className="perfume-description">
          A cozy and comforting fragrance, capturing the essence of a crackling fireplace. With notes of chestnut, vanilla, and wood, it exudes a warm and nostalgic aroma reminiscent of winter evenings by the fire.
        </p>
        <h2 className="perfume-price">$85</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default ByTheFirePlacePage;
