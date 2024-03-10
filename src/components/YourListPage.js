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

      <footer>
        <div className="footer-content">
          <p>&copy; 2024 Find Your Perfume. All rights reserved.</p>
          <small>Designed by Aldi Anika Sanmathi</small>
        </div>
      </footer>
    </div>
  );
};

export default YourListPage;
