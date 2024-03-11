import React, { useState } from 'react';
import NotAPerfumeImage from '../../data/perfumes/juliette has a gun.jpg';
import NotAPerfumeNotes from '../../data/notes/notaperfume.png';

const NotAPerfumePage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={NotAPerfumeImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={NotAPerfumeNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Juliette has a Gun</h2>
        <p className="perfume-description">
          A minimalist and unique fragrance. Composed of a single note, Cetalox, it offers a clean, woody scent. Designed for those who may be sensitive to traditional perfumes, it's a simple yet distinctive fragrance that interacts with your skin's natural oils to create a personalized, subtle aroma.
        </p>
        <h2 className="perfume-price">$145</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default NotAPerfumePage;
