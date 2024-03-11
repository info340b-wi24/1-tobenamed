import React, { useState } from 'react';
import FineRyImAMuskNotes from '../../data/notes/imamusk.png';
import FineRyImAMuskImage from '../../data/perfumes/imamuskFINERY.jpg';

const ImAMuskPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={FineRyImAMuskImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={FineRyImAMuskNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Fine'ry</h2>
        <p className="perfume-description">
          Your scent experience will be blissfully floating through a daydream. Smells like Fluffy Musk, Cotton Blossom, and Creamy Sandalwood.
        </p>
        <h2 className="perfume-price">$30</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default ImAMuskPage;
