import React, { useState } from 'react';
import GourmandWhiteFlowersNotes from '../../data/notes/gourmandwhiteflowers.png';
import GourmandWhiteFlowersPerfume from '../../data/perfumes/gourmandwhiteflowersDOSSIER.jpg';

const GourmandWhiteFlowersPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={GourmandWhiteFlowersPerfume} alt="Gourmand White Flowers Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={GourmandWhiteFlowersNotes} alt="Notes of Gourmand White Flowers perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Dossier</h2>
        <p className="perfume-description">
          Gourmand White Flowers (inspired by Viktor&Rolf's Flowerbomb) offers a sparkle of green tea, berries, caramel, and vanilla notes that play with orchid, jasmine, and rose. The fragrance trail is an intriguing woody orris accord that entwines with the floral heart. Warm and feminine, Gourmand White Flowers (our impression of Viktor&Rolf's Flowerbomb) succeeds at being both sweet and sexy, with a powdery veil that offers sophistication to the gourmand notes.
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

export default GourmandWhiteFlowersPage;
