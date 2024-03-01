import React from 'react';

export function NavBar () {
  return (
    <nav>
      <div className="nav-left">
        <h1>ScentSeeker</h1>
      </div>
      <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="searchpage.html">Search</a></li>
        <li><a href="quiz.html">Quiz</a></li>
        <li><a href="quizresults.html">Quiz Result</a></li>
        <li><a href="yourlistpage.html">My List</a></li>
        <li><a href="filterpage.html">Filter</a></li>
        <li><a href="perfumeinfopage.html">Perfume</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;