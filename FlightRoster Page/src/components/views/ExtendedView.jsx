import React from 'react';

const ExtendedView = ({ flight }) => {
  return (
    <div className="my-4 p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Extended View</h3>
      <div className="mb-4">
        <h4 className="text-lg font-medium mb-2">Flight Crew</h4>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Info</th>
            </tr>
          </thead>
          <tbody>
            {flight.crew.flightCrew.map((crew) => (
              <tr key={crew.id}>
                <td className="border px-4 py-2">{crew.name}</td>
                <td className="border px-4 py-2">{crew.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium mb-2">Cabin Crew</h4>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Info</th>
            </tr>
          </thead>
          <tbody>
            {flight.crew.cabinCrew.map((crew) => (
              <tr key={crew.id}>
                <td className="border px-4 py-2">{crew.name}</td>
                <td className="border px-4 py-2">{crew.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium mb-2">Passengers</h4>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Name</th>
              <th className="py-2">Info</th>
            </tr>
          </thead>
          <tbody>
            {flight.passengers.map((passenger) => (
              <tr key={passenger.id}>
                <td className="border px-4 py-2">{passenger.name}</td>
                <td className="border px-4 py-2">{passenger.info}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExtendedView;
