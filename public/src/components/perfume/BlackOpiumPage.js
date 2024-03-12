import React, { useState } from 'react';
import BlackOpiumNotes from '../../data/notes/Blackopium.png';
import BlackOpiumPerfume from '../../data/perfumes/black opium.jpg';

const BlackOpiumPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={BlackOpiumPerfume} alt="Black Opium Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={BlackOpiumNotes} alt="Notes of Black Opium perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by YSL</h2>
        <p className="perfume-description">
          Immerse yourself in the allure of Black Opium by Yves Saint Laurent, a modern fragrance that weaves an enchanting tapestry of invigorating notes. The composition begins with a spirited burst of coffee, awakening the senses with its addictive energy. Delicate white flowers, such as jasmine and orange blossom, gracefully unfold in the heart, adding a touch of femininity. As the fragrance evolves, a warm and sensual trail emerges, intertwining vanilla and patchouli to create a captivating olfactory journey. Black Opium embodies confidence and allure, making it an exquisite choice for those who seek a bold and luxurious aromatic experience.
        </p>
        <p>&nbsp;</p>
        <h2 className="perfume-price">$85</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default BlackOpiumPage;
