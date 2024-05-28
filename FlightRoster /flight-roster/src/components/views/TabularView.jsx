import React from 'react';

const TabularView = ({ flight }) => {
  return (
    <div>
      <h3>Tabular View</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr key={flight.pilot.PilotID}>
            <td>{flight.pilot.PilotID}</td>
            <td>{flight.pilot.PilotName}</td>
            <td>Pilot</td>
            <td>{flight.pilot.Seniority}</td>
          </tr>
          {flight.crew.map((member) => (
            <tr key={member.CrewID}>
              <td>{member.CrewID}</td>
              <td>{member.MemberName}</td>
              <td>{member.Role === 'chef' ? 'Chef' : 'Cabin Crew'}</td>
              <td>{member.Role}</td>
            </tr>
          ))}
          {flight.passengers.map((passenger) => (
            <tr key={passenger.Passenger_id}>
              <td>{passenger.Passenger_id}</td>
              <td>{passenger.Name}</td>
              <td>Passenger</td>
              <td>{passenger.Seat_type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabularView;
