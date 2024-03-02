import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export function QuizResultsPage () {
    return (
        <div >
           <NavBar />
         
        <div class="overlay"></div>


        <div class="brown-box">
        <h2>Your Perfect Scent is...</h2>
        <h2>FRUITY</h2>

        <div class="button-container">
        <Link to="/search" className="start-journey-button">See More Perfumes</Link>
        
    </div>
    </div>

          <footer>
          <small> 2024 Find Your Perfume. All rights reserved.</small>
            <small>Designed by Aldi Anika Sanmathi</small>
          </footer>
        </div>
      );
}

export default QuizResultsPage;

//u need to work on the quiz results page and then u can push to github