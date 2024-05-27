import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import FlightRoster from './../Components/FlightRoster.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../index.css';





function App2() {
  const [selectedDatabase, setSelectedDatabase] = useState(null);

  const handleSelectDatabase = (dbType) => {
    setSelectedDatabase(dbType);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <Link className="navbar-brand" to="/">Flight Roster System</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/App2">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/FlightRoster">Flight Roster</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/App2/*" element={<App2/>} />
        <Route path="/FlightRoster" element={<FlightRoster selectedDatabase={selectedDatabase} />} />
      </Routes>
    </div>
  );
}

export default App2;
