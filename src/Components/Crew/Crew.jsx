// src/Components/Crew/Crew.jsx
import React, { useEffect, useState } from 'react';
import './Crew.css';

const Crew = () => {
  const [crew, setCrew] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/crew')
      .then(response => response.json())
      .then(data => setCrew(data))
      .catch(error => console.error('Error fetching crew data:', error));
  }, []);

  return (
    <div className="crew-container">
      <h1>Crew Members</h1>
      <table className="crew-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Flight Number</th>
          </tr>
        </thead>
        <tbody>
          {crew.map((member) => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.role}</td>
              <td>{member.flightNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crew;
