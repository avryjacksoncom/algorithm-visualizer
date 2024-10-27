// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Stack from './pages/Stack';
import BinarySearch from './pages/BinarySearch';
import Home from './layout/Home';

export default function App() {
  return (
    <Router>
      <div className="d-flex">
        <Navbar />
        <div className="container-fluid p-4">
          <Routes>
          <Route path="/home" element={<Home />} />
            <Route path="/binary-search" element={<BinarySearch />} />
            <Route path="/stack" element={<Stack />} />
            {/* Add routes for other sorting algorithms as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
