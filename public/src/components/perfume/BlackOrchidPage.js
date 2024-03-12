import React, { useState } from 'react';
import BlackOrchidNotes from '../../data/notes/blackorchid.png';
import BlackOrchidPerfume from '../../data/perfumes/blackorchidTOMFORD.jpg';

const BlackOrchidPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={BlackOrchidPerfume} alt="Black Orchid Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={BlackOrchidNotes} alt="Notes of Black Orchid perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Tom Ford</h2>
        <p className="perfume-description">
          A sultry and opulent fragrance known for its rich blend of truffle, black orchid, and vanilla. The scent is dark, mysterious, and luxurious, leaving a lasting impression with its sensuous and captivating notes.
        </p>
        <h2 className="perfume-price">$295</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default BlackOrchidPage;
