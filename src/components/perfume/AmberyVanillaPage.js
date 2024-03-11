import React, { useState } from 'react';
import AmberyVanillaNotes from '../../data/notes/amberyvanilla.png';
import AmberyVanillaPerfume from '../../data/perfumes/amberyvanillaDOSSIER.jpg';

const AmberyVanillaPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={AmberyVanillaPerfume} alt="Ambery Vanilla Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={AmberyVanillaNotes} alt="Notes of Ambery Vanilla perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Dossier</h2>
        <p className="perfume-description">
          One can expect a warm and sweet fragrance with a rich blend of amber and vanilla notes. Amber often adds a deep, resinous quality, while vanilla contributes a sweet and comforting aroma. Such a combination can create a sensual and inviting olfactory experience, suitable for various occasions.
        </p>
        <h2 className="perfume-price">$29</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default AmberyVanillaPage;

