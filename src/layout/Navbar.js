// Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <div className="bg-dark text-light" style={{ minHeight: '100vh', padding: '1rem' }}>
      <div className="p-3 border border-secondary rounded" style={{ width: '250px' }}>
        <h2 className="text-center">Algorithm Visualizer</h2>
        <ul className="nav flex-column mt-3">
          <li className="nav-item">
            <Link className="nav-link text-light" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/binary-search">Binary Search</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-light" to="/stack">Stack LIFO</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
