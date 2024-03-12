import React from 'react';
import AmazingGraceNotes from '../../data/perfumes/magnoliaamazinggracePHILOSOPHY.jpg';
import AmazingGraceBottle from '../../data/notes/amazingrace.png';

const AmazingGraceMagnoliaPage = ({ perfumeName, setSavedPerfumes }) => {
  const [isSaved, setIsSaved] = React.useState(false);

  const handleSaveToList = () => {
    setSavedPerfumes((prevPerfumes) => [...prevPerfumes, perfumeName]);
    setIsSaved(true);
  };

  return (
    <div className="perfume-page-container">
      <h1 className="perfume-title">{perfumeName}</h1>

      <div className="image-container">
        <div className="perfume-column">
          <img className="notes-image" src={AmazingGraceNotes} alt="Notes of amazing grace perfume" />
        </div>

        <div className="perfume-column">
          <img className="bottle-image" src={AmazingGraceBottle} alt="Amazing Grace Perfume Bottle" />
        </div>
      </div>

      <div className="perfume-description-box">
        <h2>Discover {perfumeName} by Philosophy</h2>
        <p className="perfume-description">
          Philosophy's most intense version of amazing grace that lasts all day. Intensely concentrated with notes of juicy berries, sustainably sourced rose absolute, and soft musk. This perfume for women has increased longevity for extended wear and exceptional staying power.
        </p>
        <h2 className="perfume-price">$30</h2>
      </div>

      <div>
        <button className={`add-list-button ${isSaved ? 'saved' : ''}`} onClick={handleSaveToList}>
          {isSaved ? 'Saved to List' : 'Save to List'}
        </button>
      </div>
    </div>
  );
};

export default AmazingGraceMagnoliaPage;