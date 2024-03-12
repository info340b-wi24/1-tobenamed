import React, { useState } from 'react';
import WoodySandalwoodDossierImage from '../../data/perfumes/woodysandalwoodDOSSIER.jpg';
import WoodySandalwoodNotes from '../../data/notes/woodysandalwood.png';

const WoodySandalPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={WoodySandalwoodDossierImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={WoodySandalwoodNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Dossier</h2>
        <p className="perfume-description">
          Woody Sandalwood (inspired by Le Labo Fragrances' Santal 33) is a tribute to the often underutilized precious nature of Sandalwood. Often considered a second player in the perfume industry, this scent capitalizes on the highest quality sandalwood: the Mysore variety from India. The result is incomparable sandalwood that highlights its creamy facets, perfectly balancing the sharpness of other woods, while simultaneously giving a smooth continuity to floral bouquets. Pair that with the magical nature of sweet violet, classic orris, and woodsy musk, and Woody Sandalwood will soon become a new classic.
        </p>
        <h2 className="perfume-price">$39</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default WoodySandalPage;
