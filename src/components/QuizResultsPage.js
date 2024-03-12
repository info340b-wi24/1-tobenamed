import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function QuizResultsPage() {
  const location = useLocation();
  const userAnswers = location.state?.userAnswers || [];

  const calculateResult = () => {
    console.log('User Answers:', userAnswers);

    const counts = [0, 0, 0, 0]; // Initialize counts for each result type

    // Define the criteria for each scent type
    const criteria = [
      [0],   // GOURMAND: Questions where the first option corresponds to GOURMAND
      [1],   // FRUITY: Questions where the second option corresponds to FRUITY
      [2],   // SPICY: Questions where the third option corresponds to SPICY
      [3]    // WOODY: Questions where the fourth option corresponds to WOODY
    ];

    // Count the occurrences of each answer based on the criteria
    userAnswers.forEach((answer, index) => {
      criteria.forEach((questionCriteria, scentIndex) => {
        if (questionCriteria.includes(index) && answer === questionCriteria[0]) {
          counts[scentIndex]++;
        }
      });
    });

    // Log counts
    console.log('Counts:', counts);

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
