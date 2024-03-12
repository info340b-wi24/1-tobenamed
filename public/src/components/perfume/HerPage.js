import React, { useState } from 'react';
import BurberryHerNotes from '../../data/notes/her.png';
import BurberryHerImage from '../../data/perfumes/burburry her.jpg';

const HerBurberryPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={BurberryHerImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={BurberryHerNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Burberry</h2>
        <p className="perfume-description">
          A modern and vibrant fragrance that captures the spirit of London. It opens with fruity notes of blackcurrant and blueberry, giving it a sweet and energetic start. The heart reveals floral tones, particularly violet, adding a touch of sophistication. The base notes of musk and wood contribute warmth and depth, creating a well-balanced and versatile scent. Overall, Burberry Her is a lively and stylish fragrance with a blend of fruity and floral elements.
        </p>
        <h2 className="perfume-price">$100</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default HerBurberryPage;
