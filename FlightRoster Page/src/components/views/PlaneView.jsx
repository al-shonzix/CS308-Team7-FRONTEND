import React from 'react';
import { OverlayTrigger, Tooltip, Container } from 'react-bootstrap';
import './PlaneView.css'; // Import the CSS file

const seatPlan = [
  ['1A', '1B', '1C', '', '1D', '1E', '1F', '1G', '', '1H', '1I', '1J'],
  ['2A', '2B', '2C', '', '2D', '2E', '2F', '2G', '', '2H', '2I', '2J'],
  ['3A', '3B', '3C', '', '3D', '3E', '3F', '3G', '', '3H', '3I', '3J'],
  ['4A', '4B', '4C', '', '4D', '4E', '4F', '4G', '', '4H', '4I', '4J'],
  ['5A', '5B', '5C', '', '5D', '5E', '5F', '5G', '', '5H', '5I', '5J'],
  ['6A', '6B', '6C', '', '6D', '6E', '6F', '6G', '', '6H', '6I', '6J'],
  ['7A', '7B', '7C', '', '7D', '7E', '7F', '7G', '', '7H', '7I', '7J'],
  ['8A', '8B', '8C', '', '8D', '8E', '8F', '8G', '', '8H', '8I', '8J'],
  // Add more rows as necessary
];

const seatStatus = {
  '1A': 'extra-legroom',
  '1B': 'extra-legroom',
  '1C': 'extra-legroom',
  '1D': 'extra-legroom',
  '1E': 'extra-legroom',
  '1F': 'extra-legroom',
  '1G': 'extra-legroom',
  '1H': 'extra-legroom',
  '1I': 'extra-legroom',
  '1J': 'extra-legroom',
  '2A': 'forward-zone',
  '2B': 'forward-zone',
  '2C': 'forward-zone',
  '2D': 'forward-zone',
  '2E': 'forward-zone',
  '2F': 'forward-zone',
  '2G': 'forward-zone',
  '2H': 'forward-zone',
  '2I': 'forward-zone',
  '2J': 'forward-zone',
  // Add more status for other seats
};

const getSeatClass = (seat) => {
  switch (seatStatus[seat]) {
    case 'extra-legroom':
      return 'seat-extra-legroom';
    case 'forward-zone':
      return 'seat-forward-zone';
    default:
      return 'seat-standard';
  }
};

const PlaneView = ({ flight }) => {
  const findPersonBySeat = (seatNumber) => {
    return (
      flight.passengers.find((p) => p.seatNumber === seatNumber) ||
      flight.crew.cabinCrew.find((c) => c.seatNumber === seatNumber) ||
      flight.crew.flightCrew.find((c) => c.seatNumber === seatNumber) ||
      {}
    );
  };

  return (
    <Container className="plane-view-container">
      <h3 className="plane-view-title">Plane View</h3>
      <div className="seat-plan-container">
        {seatPlan.map((row, rowIndex) =>
          row.map((seat, seatIndex) => {
            if (seat === '') {
              return <div key={`${rowIndex}-${seatIndex}`} className="walking-path"></div>;
            }
            const person = findPersonBySeat(seat);
            return (
              <OverlayTrigger
                key={`${rowIndex}-${seatIndex}`}
                placement="top"
                overlay={
                  <Tooltip>
                    {person.name ? `${person.name} (${person.type})` : 'Empty Seat'}
                  </Tooltip>
                }
              >
                <div className={`seat ${getSeatClass(seat)}`}>
                  {seat}
                </div>
              </OverlayTrigger>
            );
          })
        )}
      </div>
      <div className="legend">
        <h4 className="legend-title">Legend</h4>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-color extra-legroom"></div>
            <span>Extra Legroom Seat</span>
          </div>
          <div className="legend-item">
            <div className="legend-color forward-zone"></div>
            <span>Forward Zone Seat</span>
          </div>
          <div className="legend-item">
            <div className="legend-color standard"></div>
            <span>Standard Seat</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlaneView;
