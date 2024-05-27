import React from 'react';
import { Table } from 'react-bootstrap';

const ExtendedView = ({ flight }) => {
  return (
    <div>
      <h3>Extended View</h3>
      <h4>Pilot</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Languages</th>
            <th>Travel Range</th>
            <th>Seniority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{flight.pilot?.PilotName}</td>
            <td>{flight.pilot?.Age}</td>
            <td>{flight.pilot?.Gender}</td>
            <td>{flight.pilot?.Nationality}</td>
            <td>{flight.pilot?.Known_Languages?.join(', ')}</td>
            <td>{flight.pilot?.Pilot_Travel_Range}</td>
            <td>{flight.pilot?.Seniority}</td>
          </tr>
        </tbody>
      </Table>

      <h4>Cabin Crew</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Languages</th>
            <th>Role</th>
            <th>Restrictions</th>
          </tr>
        </thead>
        <tbody>
          {flight.crew?.map((member) => (
            <tr key={member.CrewID}>
              <td>{member.MemberName}</td>
              <td>{member.Age}</td>
              <td>{member.Gender}</td>
              <td>{member.Nationality}</td>
              <td>{member.Known_Languages?.join(', ')}</td>
              <td>{member.Role}</td>
              <td>{member.Aircraft_Restrictions?.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h4>Passengers</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Seat Type</th>
            <th>Seat Assigned</th>
            <th>Affiliated Passengers</th>
          </tr>
        </thead>
        <tbody>
          {flight.passengers?.map((passenger) => (
            <tr key={passenger.Passenger_id}>
              <td>{passenger.Name}</td>
              <td>{passenger.Age}</td>
              <td>{passenger.Gender}</td>
              <td>{passenger.Nationality}</td>
              <td>{passenger.Seat_type}</td>
              <td>{passenger.Seat_assigned}</td>
              <td>{passenger.AffiliatedPassengerIDs?.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ExtendedView;
