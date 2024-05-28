import React from 'react';
import './PlaneView.css';

const PlaneView = ({ flight }) => {
  const { vehicleType, passengers, crew, pilot } = flight;

  const getSeatInfo = (seat) => {
    const passenger = passengers.find(p => p.Seat_assigned === seat);
    const crewMember = crew.find(c => c.Assigned_Seat === seat);
    const pilotInfo = pilot.Assigned_Seat === seat ? pilot : null;

    if (passenger) {
      return {
        name: passenger.Name,
        role: 'Passenger',
        info: `Age: ${passenger.Age}, Gender: ${passenger.Gender}, Nationality: ${passenger.Nationality}`,
      };
    }
    if (crewMember) {
      return {
        name: crewMember.MemberName,
        role: `Crew (${crewMember.Role})`,
        info: `Age: ${crewMember.Age}, Gender: ${crewMember.Gender}, Nationality: ${crewMember.Nationality}`,
      };
    }
    if (pilotInfo) {
      return {
        name: pilotInfo.PilotName,
        role: 'Pilot',
        info: `Age: ${pilotInfo.Age}, Gender: ${pilotInfo.Gender}, Nationality: ${pilotInfo.Nationality}`,
      };
    }

    return null;
  };

  const renderSeats = (layout) => {
    const seats = [];

    layout.forEach((row, rowIndex) => {
      row.forEach((seat, colIndex) => {
        if (seat === 'walkway') {
          seats.push(<div className="walkway" key={`walkway-${rowIndex}-${colIndex}`}></div>);
        } else {
          const seatInfo = getSeatInfo(seat);
          const seatClass = seatInfo ? 'light-green' : rowIndex < 4 ? 'orange' : 'deep-green';

          seats.push(
            <div className={`seat ${seatClass}`} key={seat}>
              {seat}
              {seatInfo && (
                <div className="seat-info">
                  <strong>{seatInfo.name}</strong>
                  <em>{seatInfo.role}</em>
                  <p>{seatInfo.info}</p>
                </div>
              )}
            </div>
          );
        }
      });
    });

    return seats;
  };

  const getSeatLayout = (model) => {
    const layouts = {
      'Boeing 737': [
        ['1A', '1B', '1C', 'walkway', '1D', '1E', '1F'],
        ['2A', '2B', '2C', 'walkway', '2D', '2E', '2F'],
        ['3A', '3B', '3C', 'walkway', '3D', '3E', '3F'],
        ['4A', '4B', '4C', 'walkway', '4D', '4E', '4F'],
        ['5A', '5B', '5C', 'walkway', '5D', '5E', '5F'],
        ['6A', '6B', '6C', 'walkway', '6D', '6E', '6F'],
        ['7A', '7B', '7C', 'walkway', '7D', '7E', '7F'],
        ['8A', '8B', '8C', 'walkway', '8D', '8E', '8F'],
        ['9A', '9B', '9C', 'walkway', '9D', '9E', '9F'],
        ['10A', '10B', '10C', 'walkway', '10D', '10E', '10F'],
        ['11A', '11B', '11C', 'walkway', '11D', '11E', '11F'],
        ['12A', '12B', '12C', 'walkway', '12D', '12E', '12F'],
        ['13A', '13B', '13C', 'walkway', '13D', '13E', '13F'],
        ['14A', '14B', '14C', 'walkway', '14D', '14E', '14F'],
        ['15A', '15B', '15C', 'walkway', '15D', '15E', '15F'],
        ['16A', '16B', '16C', 'walkway', '16D', '16E', '16F'],
        ['17A', '17B', '17C', 'walkway', '17D', '17E', '17F'],
        ['18A', '18B', '18C', 'walkway', '18D', '18E', '18F'],
        ['19A', '19B', '19C', 'walkway', '19D', '19E', '19F'],
        ['20A', '20B', '20C', 'walkway', '20D', '20E', '20F'],
      ],
      'Boeing 777': [
        ['1A', '1B', '1C', 'walkway', '1D', '1E', '1F', 'walkway', '1G', '1H', '1J', '1K'],
        ['2A', '2B', '2C', 'walkway', '2D', '2E', '2F', 'walkway', '2G', '2H', '2J', '2K'],
        ['3A', '3B', '3C', 'walkway', '3D', '3E', '3F', 'walkway', '3G', '3H', '3J', '3K'],
        ['4A', '4B', '4C', 'walkway', '4D', '4E', '4F', 'walkway', '4G', '4H', '4J', '4K'],
        ['5A', '5B', '5C', 'walkway', '5D', '5E', '5F', 'walkway', '5G', '5H', '5J', '5K'],
        ['6A', '6B', '6C', 'walkway', '6D', '6E', '6F', 'walkway', '6G', '6H', '6J', '6K'],
        ['7A', '7B', '7C', 'walkway', '7D', '7E', '7F', 'walkway', '7G', '7H', '7J', '7K'],
        ['8A', '8B', '8C', 'walkway', '8D', '8E', '8F', 'walkway', '8G', '8H', '8J', '8K'],
        ['9A', '9B', '9C', 'walkway', '9D', '9E', '9F', 'walkway', '9G', '9H', '9J', '9K'],
        ['10A', '10B', '10C', 'walkway', '10D', '10E', '10F', 'walkway', '10G', '10H', '10J', '10K'],
        ['11A', '11B', '11C', 'walkway', '11D', '11E', '11F', 'walkway', '11G', '11H', '11J', '11K'],
        ['12A', '12B', '12C', 'walkway', '12D', '12E', '12F', 'walkway', '12G', '12H', '12J', '12K'],
        ['13A', '13B', '13C', 'walkway', '13D', '13E', '13F', 'walkway', '13G', '13H', '13J', '13K'],
        ['14A', '14B', '14C', 'walkway', '14D', '14E', '14F', 'walkway', '14G', '14H', '14J', '14K'],
        ['15A', '15B', '15C', 'walkway', '15D', '15E', '15F', 'walkway', '15G', '15H', '15J', '15K'],
        ['16A', '16B', '16C', 'walkway', '16D', '16E', '16F', 'walkway', '16G', '16H', '16J', '16K'],
        ['17A', '17B', '17C', 'walkway', '17D', '17E', '17F', 'walkway', '17G', '17H', '17J', '17K'],
        ['18A', '18B', '18C', 'walkway', '18D', '18E', '18F', 'walkway', '18G', '18H', '18J', '18K'],
        ['19A', '19B', '19C', 'walkway', '19D', '19E', '19F', 'walkway', '19G', '19H', '19J', '19K'],
        ['20A', '20B', '20C', 'walkway', '20D', '20E', '20F', 'walkway', '20G', '20H', '20J', '20K'],
      ],
      'Boeing 747': [
        ['1A', '1B', '1C', '1D', 'walkway', '1E', '1F', '1G', '1H', '1J', '1K'],
        ['2A', '2B', '2C', '2D', 'walkway', '2E', '2F', '2G', '2H', '2J', '2K'],
        ['3A', '3B', '3C', '3D', 'walkway', '3E', '3F', '3G', '3H', '3J', '3K'],
        ['4A', '4B', '4C', '4D', 'walkway', '4E', '4F', '4G', '4H', '4J', '4K'],
        ['5A', '5B', '5C', '5D', 'walkway', '5E', '5F', '5G', '5H', '5J', '5K'],
        ['6A', '6B', '6C', '6D', 'walkway', '6E', '6F', '6G', '6H', '6J', '6K'],
        ['7A', '7B', '7C', '7D', 'walkway', '7E', '7F', '7G', '7H', '7J', '7K'],
        ['8A', '8B', '8C', '8D', 'walkway', '8E', '8F', '8G', '8H', '8J', '8K'],
        ['9A', '9B', '9C', '9D', 'walkway', '9E', '9F', '9G', '9H', '9J', '9K'],
        ['10A', '10B', '10C', '10D', 'walkway', '10E', '10F', '10G', '10H', '10J', '10K'],
        ['11A', '11B', '11C', '11D', 'walkway', '11E', '11F', '11G', '11H', '11J', '11K'],
        ['12A', '12B', '12C', '12D', 'walkway', '12E', '12F', '12G', '12H', '12J', '12K'],
        ['13A', '13B', '13C', '13D', 'walkway', '13E', '13F', '13G', '13H', '13J', '13K'],
        ['14A', '14B', '14C', '14D', 'walkway', '14E', '14F', '14G', '14H', '14J', '14K'],
        ['15A', '15B', '15C', '15D', 'walkway', '15E', '15F', '15G', '15H', '15J', '15K'],
        ['16A', '16B', '16C', '16D', 'walkway', '16E', '16F', '16G', '16H', '16J', '16K'],
        ['17A', '17B', '17C', '17D', 'walkway', '17E', '17F', '17G', '17H', '17J', '17K'],
        ['18A', '18B', '18C', '18D', 'walkway', '18E', '18F', '18G', '18H', '18J', '18K'],
        ['19A', '19B', '19C', '19D', 'walkway', '19E', '19F', '19G', '19H', '19J', '19K'],
        ['20A', '20B', '20C', '20D', 'walkway', '20E', '20F', '20G', '20H', '20J', '20K'],
      ],
      // Add more plane models and layouts as needed
    };

    return layouts[model] || layouts['Boeing 737']; // Default to Boeing 737 layout if model not found
  };

  const seatLayout = getSeatLayout(vehicleType.Model);

  return (
    <div>
      <h3>Plane View for {vehicleType.Model}</h3>
      <div className="plane-view-container" style={{ gridTemplateColumns: `repeat(${seatLayout[0].length}, auto)` }}>
        {renderSeats(seatLayout)}
      </div>
    </div>
  );
};

export default PlaneView;
