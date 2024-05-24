import React from 'react';

const TabularView = ({ flight }) => {
  return (
    <div className="my-4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Tabular View</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Type</th>
            <th className="py-2">Name</th>
            <th className="py-2">ID</th>
          </tr>
        </thead>
        <tbody>
          {flight.crew.flightCrew.map((person) => (
            <tr key={person.id}>
              <td className="border px-4 py-2">Pilot</td>
              <td className="border px-4 py-2">{person.name}</td>
              <td className="border px-4 py-2">{person.id}</td>
            </tr>
          ))}
          {flight.crew.cabinCrew.map((person) => (
            <tr key={person.id}>
              <td className="border px-4 py-2">Attendant</td>
              <td className="border px-4 py-2">{person.name}</td>
              <td className="border px-4 py-2">{person.id}</td>
            </tr>
          ))}
          {flight.passengers.map((person) => (
            <tr key={person.id}>
              <td className="border px-4 py-2">Passenger</td>
              <td className="border px-4 py-2">{person.name}</td>
              <td className="border px-4 py-2">{person.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabularView;
