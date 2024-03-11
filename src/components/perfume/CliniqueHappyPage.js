import React, { useState } from 'react';
import CliniqueHappyNotes from '../../data/notes/happy.png';
import CliniqueHappyPerfume from '../../data/perfumes/cliniquehappCLINIQUE.jpg';

const CliniqueHappyPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={CliniqueHappyPerfume} alt="Clinique Happy Perfume Bottle" />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={CliniqueHappyNotes} alt="Notes of Clinique Happy perfume" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Clinique</h2>
        <p className="perfume-description">
          A lively and fresh fragrance known for its uplifting and optimistic vibes. It features a blend of crisp apple, bergamot, plum, and floral notes like freesia and rose. The base notes of musk and amber add warmth. Overall, it's a versatile and youthful scent designed to evoke a sense of joy and positivity.
        </p>
        <h2 className="perfume-price">$60</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default CliniqueHappyPage;
