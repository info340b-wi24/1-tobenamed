import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import QuizPage from './QuizPage';

export function App () {
  return (

    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/quiz" component={QuizPage} />
      </Routes>
    </Router>
  );
};

export default App;