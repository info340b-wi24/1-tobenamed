import React, { useState } from 'react';
import WhispersLibraryMaisonMargielaImage from '../../data/perfumes/whispersinthelibraryMAISONMARGIELA.jpg';
import WhispersLibraryNotes from '../../data/notes/whispersinthelibrary.png';

const WhispersInLibPage = ({ perfumeName, setSavedPerfumes }) => {
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
          <img className="bottle-image" src={WhispersLibraryMaisonMargielaImage} alt={`${perfumeName} Bottle`} />
        </div>
        <div className="perfume-column">
          <img className="notes-image" src={WhispersLibraryNotes} alt={`Notes of ${perfumeName}`} />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Masion Margiela</h2>
        <p className="perfume-description">
          A warm and inviting fragrance with notes of pepper, orange blossom, cedarwood, tonka bean, vanilla, and vetiver. It evokes the cozy atmosphere of a library filled with old books, offering a nostalgic and intimate olfactory experience.
        </p>
        <h2 className="perfume-price">$155</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default WhispersInLibPage;
