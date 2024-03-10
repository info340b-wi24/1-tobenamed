// HomePage.js
import React from 'react';
 import { Link } from 'react-router-dom';


export function HomePage () {
  return (
    <div >
      
      <div className="right-box">
        <h1>WELCOME TO SCENTSEEKER...</h1>
        <h2>Find your perfect scent.</h2>
        <Link to="/quiz" className="start-journey-button">START YOUR JOURNEY</Link>
       
      </div>

      <footer>
    <div class="footer-content">
        <small> 2024 Find Your Perfume. All rights reserved.</small>
        <small>Designed by Aldi Anika Sanmathi</small>
    </div>
  </footer>
    </div>
  );
};

export default HomePage;


