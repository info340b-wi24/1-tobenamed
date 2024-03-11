import React, { useState } from 'react';
import ChaiEpiceNotes from '../../data/notes/chaiepice.png';
import ChaiEpicePerfume from '../../data/perfumes/chaiepiceLEMONDE.jpg';

const ChaiEpicePage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={ChaiEpicePerfume} alt="Chai Epice Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={ChaiEpiceNotes} alt="Notes of Chai Epice perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by La Monde</h2>
        <p className="perfume-description">
          Capturing the perfect balance of spicy and sweet, Chai Épicé features notes of Violet Fig, Muguet Musk, and Blonde Woods. Warning: this fragrance will make you want to grab the perfect chai latte, a soft blanket, and spend a cozy night in.
        </p>
        <h2 className="perfume-price">$49</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default ChaiEpicePage;
