import React from 'react';
import NavBar from './NavBar';

const YourListPage = () => {
  return (
    <div className="home-body">
      <NavBar />
      {/* Perfume Catalog */}
      <h1>Your List</h1>

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