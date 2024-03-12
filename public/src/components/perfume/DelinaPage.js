import React, { useState } from 'react';
import DelinaNotes from '../../data/notes/Delina.png';
import DelinaPerfume from '../../data/perfumes/delinaPARFUMSDEMARLY.jpg';

const DelinaPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={DelinaPerfume} alt="Delina Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={DelinaNotes} alt="Notes of Delina perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Parfums de Marly</h2>
        <p className="perfume-description">
          A sophisticated and elegant fragrance known for its floral and fruity notes. It opens with a fresh blend of bergamot, rhubarb, and lychee, followed by a romantic heart of Turkish rose and peony. The base notes include vetiver and cedar for depth, with a touch of vanilla. Delina is praised for its modern and luxurious interpretation of a classic floral scent, making it suitable for various occasions.
        </p>
        <h2 className="perfume-price">$210</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default DelinaPage;
