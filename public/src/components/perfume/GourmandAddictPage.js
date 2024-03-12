import React, { useState } from 'react';
import GourmandAddictNotes from '../../data/notes/gourmandaddict.png';
import GourmandAddictPerfume from '../../data/perfumes/gourmandaddictZARA.jpg';

const GourmandAddictPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={GourmandAddictPerfume} alt="Gourmand Addict Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={GourmandAddictNotes} alt="Notes of Gourmand Addict perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Zara</h2>
        <p className="perfume-description">
          A chic heart featuring exclusive floral notes such as may rose and jasmine, contrasting with the originality of a juicy fruity note (peach & blackcurrant). A background filled with personality and distinction, based on enveloping notes such as patchouli and benzoin, complement each other with a sensual woody tone.
        </p>
        <h2 className="perfume-price">$55</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default GourmandAddictPage;
