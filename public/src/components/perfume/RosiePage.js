import React, { useState } from 'react';
import RosieByRosieJaneImage from '../../data/perfumes/rosieBYROSIEJANE.jpg';
import RosieJaneNotes from '../../data/notes/rosie.png';

const RosiePage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={RosieByRosieJaneImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={RosieJaneNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Rosie Jane</h2>
        <p className="perfume-description">
          A charming and delicate fragrance designed by the brand Rosie Jane. It features a lovely combination of floral and sweet notes. With a bouquet of roses as a prominent element, the scent is both feminine and fresh. It is often celebrated for its simplicity and is suitable for everyday wear, providing a subtle and pleasant aroma.
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

export default RosiePage;
