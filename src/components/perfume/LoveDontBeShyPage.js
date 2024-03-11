import React, { useState } from 'react';
import KilianLoveDontBeShyNotes from '../../data/notes/lovedontbeshy.png';
import KilianLoveDontBeShyImage from '../../data/perfumes/killian.jpg';

const LoveDontBeShyPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={KilianLoveDontBeShyImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={KilianLoveDontBeShyNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Kilian</h2>
        <p className="perfume-description">
          This fragrance implores you at the opening with tender orange blossom absolute. Juicy honeysuckle and plush rose are softly caressed by the sweetness of luscious marshmallow sugar accord, satisfying the craving pang of new love. A warm amber base lends a touch of sensuality.
        </p>
        <h2 className="perfume-price">$325</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default LoveDontBeShyPage;
