// src/Components/Flights/Flight.jsx
import React, { useEffect, useState } from 'react';
import './Flight.css';

const Flight = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/api/flights')
      .then(response => response.json())
      .then(data => setFlights(data))
      .catch(error => console.error('Error fetching flight data:', error));
  }, []);

  return (
    <div className="roster-container">
      <h1>Flight Roster</h1>
      <table className="flight-table">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Arrival</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{flight.departure}</td>
              <td>{flight.arrival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Flight;
