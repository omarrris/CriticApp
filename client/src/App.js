import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import GenreSelectionPage from './pages/GenreSelectionPage';
import GetStartedPage from './pages/GetStartedPage';
import TheaterPage from './pages/TheaterPage';
import OverallAuteursPage from './pages/OverallAuteursPage';
import OverallFestivalsPage from './pages/OverallFestivalsPage';
import SpecificAuteurPage from './pages/SpecificAuteurPage';
import SpecificFestivalPage from './pages/SpecificFestivalPage';
import MoviePage from './pages/MoviePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/genres" element={<GenreSelectionPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/theater" element={<TheaterPage />} />
        <Route path="/auteurs" element={<OverallAuteursPage />} />
        <Route path="/festivals" element={<OverallFestivalsPage />} />
        <Route path="/auteur/:id" element={<SpecificAuteurPage />} />
        <Route path="/festival/:id" element={<SpecificFestivalPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </Router>
  );
}

export default App;
