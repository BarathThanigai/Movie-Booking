import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './MovieDetails';
import Booking from './Booking';
import Confirmation from './Confirmation';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MovieDetails/:id" element={<MovieDetails />} />
      <Route path="/Booking/:id" element={<Booking />} />
      <Route path="/Confirmation/:id" element={<Confirmation />} />
    </Routes>
  );
};

export default App;

