import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import QuizPage from './QuizPage';
import QuizResultsPage from './QuizResultsPage';
import SearchPage from './SearchPage';
import YourListPage from './YourListPage';
import AmazingGraceMagnoliaPage from './perfume/AmazingGraceMagnoliaPage';
import AmberyVanillaPage from './perfume/AmberyVanillaPage';
import BlackOpiumPage from './perfume/BlackOpiumPage';
import BlackOrchidPage from './perfume/BlackOrchidPage';
import ByTheFirePlacePage from './perfume/ByTheFirePlacePage';
import ChaiEpicePage from './perfume/ChaiEpicePage';
import CliniqueHappyPage from './perfume/CliniqueHappyPage';
import DelinaPage from './perfume/DelinaPage';
import FruitySherbertPage from './perfume/FruitySherbertPage';
import GoodGirlPage from './perfume/GoodGirlPage';
import GourmandAddictPage from './perfume/GourmandAddictPage';
import GourmandWhiteFlowersPage from './perfume/GourmandWhiteFlowersPage';
import HerPage from './perfume/HerPage';
import ImAMuskPage from './perfume/ImAMuskPage';
import LightBluePage from './perfume/LightBluePage';
import LoveDontBeShyPage from './perfume/LoveDontBeShyPage';
import MonParisPage from './perfume/MonParisPage';
import MuskTherapyPage from './perfume/MuskTherapyPage';
import NotAPerfumePage from './perfume/NotAPerfumePage';
import RosiePage from './perfume/RosiePage';
import SweetToothPage from './perfume/SweetToothPage';
import WhispersInLibPage from './perfume/WhispersInLibPage';
import WoodySandalPage from './perfume/WoodySandalPage';
import NavBar from './NavBar'; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBuK_Fr7beUJMpp46LbhPQvbeNHiE_lGfI",
  authDomain: "info-340-final-scent-seeker.firebaseapp.com",
  projectId: "info-340-final-scent-seeker",
  storageBucket: "info-340-final-scent-seeker.appspot.com",
  messagingSenderId: "701516229591",
  appId: "1:701516229591:web:a1468c2e804be602e53992",
  measurementId: "G-YZT1LFVY8C"
};

// Initialize Firebase



function App() {
  const [savedPerfumes, setSavedPerfumes] = useState([]);

  // Your component code goes here


  const [userAnswers] = useState([]); 
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizresults" element={<QuizResultsPage userAnswers={userAnswers} />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/YourListPage"
          element={<YourListPage savedPerfumes={savedPerfumes} />}
        />
        <Route
          path="/perfume/Love don't be shy"
          element={<LoveDontBeShyPage setSavedPerfumes={setSavedPerfumes} perfumeName="Love Don't Be Shy" />}
        />
        <Route
          path="/perfume/Black Opium"
          element={<BlackOpiumPage setSavedPerfumes={setSavedPerfumes} perfumeName="Black Opium" />}
        />
        <Route
          path="/perfume/Light Blue"
          element={<LightBluePage setSavedPerfumes={setSavedPerfumes} perfumeName="Light Blue" />}
        />
        <Route
          path="/perfume/Not a Perfume"
          element={<NotAPerfumePage setSavedPerfumes={setSavedPerfumes} perfumeName="Not A Perfume" />}
        />
        <Route
          path="/perfume/Her"
          element={<HerPage setSavedPerfumes={setSavedPerfumes} perfumeName="Her" />}
        />
        <Route
          path="/perfume/By the Fireplace"
          element={<ByTheFirePlacePage setSavedPerfumes={setSavedPerfumes} perfumeName="By the Fire Place" />}
        />
        <Route
          path="/perfume/Good Girl Blush"
          element={<GoodGirlPage setSavedPerfumes={setSavedPerfumes} perfumeName="Good Girl Blush" />}
        />
        <Route
          path="/perfume/Delina"
          element={<DelinaPage setSavedPerfumes={setSavedPerfumes} perfumeName="Delina Parfums de Marly" />}
        />
        <Route
          path="/perfume/Amazing Grace Magnolia"
          element={<AmazingGraceMagnoliaPage setSavedPerfumes={setSavedPerfumes} perfumeName="Amazing Grace Magnolia" />}
        />
        <Route
          path="/perfume/Rosie"
          element={<RosiePage setSavedPerfumes={setSavedPerfumes} perfumeName="Rosie" />}
        />
        <Route
          path="/perfume/Whispers in the library"
          element={<WhispersInLibPage setSavedPerfumes={setSavedPerfumes} perfumeName="Whispers in the Library" />}
        />
        <Route
          path="/perfume/Woody Sandalwood"
          element={<WoodySandalPage setSavedPerfumes={setSavedPerfumes} perfumeName="Woody Sandalwood" />}
        />
        <Route
          path="/perfume/Musk Therapy"
          element={<MuskTherapyPage setSavedPerfumes={setSavedPerfumes} perfumeName="Musk Therapy" />}
        />
        <Route
          path="/perfume/Gourmand White Flowers"
          element={<GourmandWhiteFlowersPage setSavedPerfumes={setSavedPerfumes} perfumeName="Gourmand White Flowers" />}
        />
        <Route
          path="/perfume/Gourmand Addict"
          element={<GourmandAddictPage setSavedPerfumes={setSavedPerfumes} perfumeName="Gourmand Addict" />}
        />
        <Route
          path="/perfume/Fruity Sherbert Scoop"
          element={<FruitySherbertPage setSavedPerfumes={setSavedPerfumes} perfumeName="Fruity Sherbert Scoop" />}
        />
        <Route
          path="/perfume/Sweet Tooth"
          element={<SweetToothPage setSavedPerfumes={setSavedPerfumes} perfumeName="Sweet Tooth" />}
        />
        <Route
          path="/perfume/Black Orchid"
          element={<BlackOrchidPage setSavedPerfumes={setSavedPerfumes} perfumeName="Black Orchid" />}
        />
        <Route
          path="/perfume/ Mon Paris"
          element={<MonParisPage setSavedPerfumes={setSavedPerfumes} perfumeName="Mon Paris" />}
        />
        <Route
          path="/perfume/Ambery Vanilla"
          element={<AmberyVanillaPage setSavedPerfumes={setSavedPerfumes} perfumeName="Ambery Vanila" />}
        />
        <Route
          path="/perfume/Le Chai Epice"
          element={<ChaiEpicePage setSavedPerfumes={setSavedPerfumes} perfumeName="Chai Epice" />}
        />
        <Route
          path="/perfume/Clinque Happy"
          element={<CliniqueHappyPage setSavedPerfumes={setSavedPerfumes} perfumeName="Clinque Happy" />}
        />
        <Route
          path="/perfume/I'm a Musk"
          element={<ImAMuskPage setSavedPerfumes={setSavedPerfumes} perfumeName="I'm a Musk" />}
        />
      </Routes>
      <footer>
          <p className="footer-content">&copy; ScentSeeker. All rights reserved. Designed by Aldi Anika Sanmathi</p>
      </footer>
    </Router>
  );
}

export default App;



