import React from 'react';

const YourListPage = ({ savedPerfumes }) => {
  return (
    <div className="yourlist-page-container">
      <h1 className="yourlist-heading">Your List</h1>

      <div className="yourlist-content-container">
        <ul className="yourlist">
          {savedPerfumes.map((perfume, index) => (
            <li key={index}>{perfume}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YourListPage;
