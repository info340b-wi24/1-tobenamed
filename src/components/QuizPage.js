// QuizPage.js
import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

export function QuizPage () {
  return (
    <div className="quiz-body">
       <NavBar />
      <header>
        <h1 className="quizheader">Tell us about yourself...</h1>
      </header>

      <section className="fullq">
        <h2 className="quizquestion">Question 1: What's Your Favorite Season?</h2>
        <ul className="answers">
          <li>Winter <button type="button"></button></li>
          <li>Spring <button type="button"></button></li>
          <li>Summer <button type="button"></button></li>
          <li>Fall <button type="button"></button></li>
        </ul>
      </section>

      <section className="fullq">
        <h2 className="quizquestion">Question 2: When do You Typically Wear Perfume?</h2>
        <ul className="answers">
          <li>Night Out <button type="button"></button></li>
          <li>Date Night <button type="button"></button></li>
          <li>Everyday <button type="button"></button></li>
          <li>At Work <button type="button"></button></li>
        </ul>
      </section>

      <section className="fullq">
        <h2 className="quizquestion">Question 3: How Do You Want Your Perfume to Make You Feel?</h2>
        <ul className="answers">
          <li>Pretty <button type="button"></button></li>
          <li>Happy <button type="button"></button></li>
          <li>Comfortable <button type="button"></button></li>
          <li>Confident <button type="button"></button></li>
        </ul>
      </section>

      <section className="fullq">
        <h2 className="quizquestion">Question 4: What's Your Role In Your Friend Group?</h2>
        <ul className="answers">
          <li>The Leader <button type="button"></button></li>
          <li>The Shoulder to Cry On <button type="button"></button></li>
          <li>The Go-With-the-Flow <button type="button"></button></li>
          <li>The Life of The Party<button type="button"></button></li>
        </ul>
      </section>

      <section className="fullq">
        <h2 className="quizquestion"> Question 5: Do You Prefer Your Fragrance to</h2>
        <ul className="answers">
          <li>Make a Statement <button type="button"></button></li>
          <li>Be Your Skin but Better <button type="button"></button></li>
        </ul>
      </section>

      <Link to="/quizresults" className="button-link">Submit</Link>
      
      
      <footer>
      <small> 2024 Find Your Perfume. All rights reserved.</small>
        <small>Designed by Aldi Anika Sanmathi</small>
      </footer>
    </div>
  );
};

export default QuizPage;
