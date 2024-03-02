import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import QuizPage from './QuizPage';
import QuizResultsPage from './QuizResultsPage';
import { Link } from 'react-router-dom';
// import NavBar from './NavBar';

export function App () {
  return (
    <Router>
     <Routes>
     <Route exact path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizresults" element={<QuizResultsPage />} />
      </Routes>
   </Router>
  //  <div>
  //   <main>
  //     <Home/> 
  //   </main>
  //  </div>
  );
};


// const Home = ()=> {
//   return (
//     <div className="home-body">
//         <NavBar /> 

//       <div className="right-box">
//         <h1>WELCOME TO SCENTSEEKER...</h1>
//         <h2>Find your perfect scent.</h2>
//         <button className="start-journey-button">START YOUR JOURNEY</button>
//       </div>
//     </div>
//   );
// }


// const NavBar = ()=> {
// return (
//   <nav>
//     <div
//     className="nav-left">
//      <h1>ScentSeeker</h1>
//      </div>
//      <ul>
//      <li><a href="home.html">Home</a></li>
//         <li><a href="searchpage.html">Search</a></li>
//         <li><a href="/quiz">Quiz</a></li>
//         <li><a href="quizresults.html">Quiz Result</a></li>
//         <li><a href="yourlistpage.html">My List</a></li>
//         <li><a href="filterpage.html">Filter</a></li>
//         <li><a href="perfumeinfopage.html">Perfume</a></li>
//     </ul>
//   </nav>
// );
// }

export default App; 


