import React, { useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import FlightRoster from './components/FlightRoster';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <Link className="navbar-brand" to="/">Flight Roster System</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/roster">Flight Roster</Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto" style={{ marginLeft: 'auto' }}>
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">Sign Up</Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={handleLogout}>Sign Out</button>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
        <Route path="/roster" element={isAuthenticated ? <FlightRoster /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<SignUpPage setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </div>
  );
};

export default App;
