import React, { useState } from 'react';
import GoodGirlBlushNotes from '../../data/notes/goodgirlblush.png';
import GoodGirlBlushPerfume from '../../data/perfumes/goodgirlblushCAROLINAHERRERA.jpg';

const GoodGirlBlushPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={GoodGirlBlushPerfume} alt="Good Girl Blush Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={GoodGirlBlushNotes} alt="Notes of Good Girl Blush perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Carolina Herrera</h2>
        <p className="perfume-description">
          Good Girl Blush by Carolina Herrera is a fragrance that celebrates the modern woman's duality – her audacious, daring side, and her sweet, romantic side. This captivating scent opens with fruity notes of luscious red berries and pink pepper, leading to a heart of floral goodness with rose, jasmine, and orange blossom. The base notes of praline and cedarwood add a touch of warmth and sophistication. Good Girl Blush is a charming and versatile fragrance that reflects the complexity of a woman's personality.
        </p>
        <h2 className="perfume-price">$135</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default GoodGirlBlushPage;
