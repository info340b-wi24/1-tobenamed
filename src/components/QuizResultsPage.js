import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function QuizResultsPage() {
  const location = useLocation();
  const userAnswers = location.state?.userAnswers || [];
  
  console.log('User Answers:', userAnswers);

  const calculateResult = () => {
    const counts = [0, 0, 0, 0]; 

  
    const answerMap = {
      "Winter": 0,
      "Spring": 1,
      "Summer": 2,
      "Fall": 3,
      "Night Out": 0,
      "Date Night": 1,
      "Everyday": 2,
      "At Work": 3,
      "Pretty": 0,
      "Happy": 1,
      "Comfortable": 2,
      "Confident": 3,
      "The Leader": 0,
      "The Shoulder to Cry On": 1,
      "The Go-With-the-Flow": 2,
      "The Life of The Party": 3,
      "Make a Statement": 0,
      "Be Your Skin but Better": 1,
      "Get You Compliments": 2,
      "Grab Peoples Attention": 3
    };

   
    userAnswers.forEach((answer) => {
      const index = answerMap[answer];
      if (index !== undefined) {
        counts[index]++;
      }
    });

    const maxCountIndex = counts.indexOf(Math.max(...counts));

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
