import React, { useState } from 'react';
import SweetToothSabrinaCarpenterImage from '../../data/perfumes/sweettoothSABRINACARPENTER.jpg';
import SweetToothNotes from '../../data/notes/sweettooth.png';

const SweetToothPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={SweetToothSabrinaCarpenterImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={SweetToothNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Sabrina Carpenter</h2>
        <p className="perfume-description">
          A sweet and sophisticated gourmand fragrance that is inspired by her love of desserts. It has notes of candied ginger, chocolate marshmallow, milky vanilla, jasmine petals, sparkling bergamot, and sensual musk. It is housed in a bottle that looks like a bar of pink chocolate.
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

export default SweetToothPage;
