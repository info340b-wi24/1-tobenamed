import React, { useState } from 'react';
import MonParisYSLNotes from '../../data/notes/monparis.png';
import MonParisYSLImage from '../../data/perfumes/MonParisYSL.jpg';

const MonParisPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={MonParisYSLImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={MonParisYSLNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by YSL</h2>
        <p className="perfume-description">
          A modern and romantic fragrance with a sweet and fruity opening of strawberry and raspberry. The floral heart of datura flower and peony adds a touch of femininity, while the white musk and patchouli base provide depth and sensuality. {perfumeName} is a captivating and passionate scent, embodying a contemporary interpretation of love in the city of Paris.
        </p>
        <h2 className="perfume-price">$87</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default MonParisPage;
