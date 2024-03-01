// HomePage.js
import React from 'react';
import NavBar from './NavBar';

export function HomePage () {
  return (
    <div className="home-body">
        <NavBar />

      <div className="right-box">
        <h1>WELCOME TO SCENTSEEKER...</h1>
        <h2>Find your perfect scent.</h2>
        <button className="start-journey-button">START YOUR JOURNEY</button>
      </div>
    </div>
  );
};

export default HomePage;
