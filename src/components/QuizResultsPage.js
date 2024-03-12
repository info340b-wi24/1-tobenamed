import React from 'react';
import { Link } from 'react-router-dom';

export function QuizResultsPage ({ userAnswers }) {
  const calculateResult = () => {
    const counts = [0, 0, 0, 0]; //starts w count zero

    const criteria = [
      [0, 1], // GOURMAND: Indexes of questions where the first option corresponds to GOURMAND
      [1],    // FRUITY: Indexes of questions where the second option corresponds to FRUITY
      [2],    // SPICY: Indexes of questions where the third option corresponds to SPICY
      [3]     // WOODY: Indexes of questions where the fourth option corresponds to WOODY
    ];

    // Counting how many times
    userAnswers.forEach((answer, index) => {
      criteria.forEach((questionCriteria, scentIndex) => {
        if (questionCriteria.includes(index) && answer === 'Yes') {
          counts[scentIndex]++;
        }
      });
    });

    // Determine the result based on the counts
    const maxCountIndex = counts.indexOf(Math.max(...counts));

    // Return the corresponding result based on the max count
    switch (maxCountIndex) {
      case 0:
        return 'GOURMAND';
      case 1:
        return 'FRUITY';
      case 2:
        return 'SPICY';
      case 3:
        return 'WOODY';
      default:
        return 'FRUITY'; // Default result
    }
  };

  return (
    <div>
      <div className="overlay"></div>
      <div className="brown-box">
        <h2>Your Perfect Scent is...</h2>
        <h2>{calculateResult()}</h2>
        <div className="button-container">
          <Link to="/search" className="start-journey-button">See More Perfumes</Link>
        </div>
      </div>
    </div>
  );
}

export default QuizResultsPage;