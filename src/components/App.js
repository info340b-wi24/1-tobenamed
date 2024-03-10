import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import QuizPage from './QuizPage';
import QuizResultsPage from './QuizResultsPage';
import SearchPage from './SearchPage';
import YourListPage from './YourListPage';
import AmazingGracePage from './perfume/AmazingGracePage';
import NavBar from './NavBar'; // Make sure to include NavBar

export function App() {
  const [savedPerfumes, setSavedPerfumes] = useState([]);

  return (
    <Router>
      <NavBar /> {/* Include NavBar component here */}
      <Routes>
        {/* Other routes */}
        <Route exact path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizresults" element={<QuizResultsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/YourListPage"
          element={<YourListPage savedPerfumes={savedPerfumes} />}
        />
        <Route
          path="/perfume/9"
          element={<AmazingGracePage setSavedPerfumes={setSavedPerfumes} perfumeName="Amazing Grace Magnolia" />}
        />
      </Routes>
    </Router>
  );
}

export default App;



