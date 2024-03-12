import React from 'react';
import { Link } from 'react-router-dom';

export function QuizResultsPage ({ userAnswers }) {
  const questions = [
    {
      question: "What's Your Favorite Season?",
      options: ["Winter", "Spring", "Summer", "Fall"],
    },
    {
      question: "When do You Typically Wear Perfume?",
      options: ["Night Out", "Date Night", "Everyday", "At Work"],
    },
    {
      question: "How Do You Want Your Perfume to Make You Feel?",
      options: ["Pretty", "Happy", "Comfortable", "Confident"],
    },
    {
      question: "What's Your Role In Your Friend Group?",
      options: [
        "The Leader",
        "The Shoulder to Cry On",
        "The Go-With-the-Flow",
        "The Life of The Party",
      ],
    },
    {
      question: "Do You Prefer Your Fragrance to",
      options: [
        "Make a Statement",
        "Be Your Skin but Better",
        "Get You Compliments",
        "Grab Peoples Attention",
      ],
    },
  ];

  const calculateResult = () => {
    const counts = [0, 0, 0, 0]; // Initialize counts for each scent category
  
    userAnswers.forEach((answer, index) => {
      questions[index].options.forEach((option, optionIndex) => {
        if (answer === option) {
          // Increment count for the corresponding scent category
          counts[optionIndex]++;
        }
      });
    });
  
    // Determine the scent category with the highest count
    const maxCountIndex = counts.indexOf(Math.max(...counts));
  
    // Return the scent category based on the max count
    switch (maxCountIndex) {
      case 0:
        return "GOURMAND";
      case 1:
        return "FRUITY";
      case 2:
        return "SPICY";
      case 3:
        return "WOODY";
      default:
        return "FRUITY"; // Default result
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