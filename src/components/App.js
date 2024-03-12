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

export function App() {
  const [savedPerfumes, setSavedPerfumes] = useState([]);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quizresults" element={<QuizResultsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/YourListPage"
          element={<YourListPage savedPerfumes={savedPerfumes} />}
        />
        <Route
          path="/perfume/1"
          element={<LoveDontBeShyPage setSavedPerfumes={setSavedPerfumes} perfumeName="Love Don't Be Shy" />}
        />
        <Route
          path="/perfume/2"
          element={<BlackOpiumPage setSavedPerfumes={setSavedPerfumes} perfumeName="Black Opium" />}
        />
        <Route
          path="/perfume/3"
          element={<LightBluePage setSavedPerfumes={setSavedPerfumes} perfumeName="Light Blue" />}
        />
        <Route
          path="/perfume/4"
          element={<NotAPerfumePage setSavedPerfumes={setSavedPerfumes} perfumeName="Not A Perfume" />}
        />
        <Route
          path="/perfume/5"
          element={<HerPage setSavedPerfumes={setSavedPerfumes} perfumeName="Her" />}
        />
        <Route
          path="/perfume/6"
          element={<ByTheFirePlacePage setSavedPerfumes={setSavedPerfumes} perfumeName="By the Fire Place" />}
        />
        <Route
          path="/perfume/7"
          element={<GoodGirlPage setSavedPerfumes={setSavedPerfumes} perfumeName="Good Girl Blush" />}
        />
        <Route
          path="/perfume/8"
          element={<DelinaPage setSavedPerfumes={setSavedPerfumes} perfumeName="Delina Parfums de Marly" />}
        />
        <Route
          path="/perfume/9"
          element={<AmazingGraceMagnoliaPage setSavedPerfumes={setSavedPerfumes} perfumeName="Amazing Grace Magnolia" />}
        />
        <Route
          path="/perfume/10"
          element={<RosiePage setSavedPerfumes={setSavedPerfumes} perfumeName="Rosie" />}
        />
        <Route
          path="/perfume/11"
          element={<WhispersInLibPage setSavedPerfumes={setSavedPerfumes} perfumeName="Whispers in the Library" />}
        />
        <Route
          path="/perfume/12"
          element={<WoodySandalPage setSavedPerfumes={setSavedPerfumes} perfumeName="Woody Sandalwood" />}
        />
        <Route
          path="/perfume/13"
          element={<MuskTherapyPage setSavedPerfumes={setSavedPerfumes} perfumeName="Musk Therapy" />}
        />
        <Route
          path="/perfume/14"
          element={<GourmandWhiteFlowersPage setSavedPerfumes={setSavedPerfumes} perfumeName="Gourmand White Flowers" />}
        />
        <Route
          path="/perfume/15"
          element={<GourmandAddictPage setSavedPerfumes={setSavedPerfumes} perfumeName="Gourmand Addict" />}
        />
        <Route
          path="/perfume/16"
          element={<FruitySherbertPage setSavedPerfumes={setSavedPerfumes} perfumeName="Fruity Sherbert Scoop" />}
        />
        <Route
          path="/perfume/17"
          element={<SweetToothPage setSavedPerfumes={setSavedPerfumes} perfumeName="Sweet Tooth" />}
        />
        <Route
          path="/perfume/18"
          element={<BlackOrchidPage setSavedPerfumes={setSavedPerfumes} perfumeName="Black Orchid" />}
        />
        <Route
          path="/perfume/19"
          element={<MonParisPage setSavedPerfumes={setSavedPerfumes} perfumeName="Mon Paris" />}
        />
        <Route
          path="/perfume/20"
          element={<AmberyVanillaPage setSavedPerfumes={setSavedPerfumes} perfumeName="Ambery Vanila" />}
        />
        <Route
          path="/perfume/21"
          element={<ChaiEpicePage setSavedPerfumes={setSavedPerfumes} perfumeName="Chai Epice" />}
        />
        <Route
          path="/perfume/22"
          element={<CliniqueHappyPage setSavedPerfumes={setSavedPerfumes} perfumeName="Clinque Happy" />}
        />
        <Route
          path="/perfume/23"
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



