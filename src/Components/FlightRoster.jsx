import React, { useState, useEffect } from 'react';
import FlightSelector from './FlightSelector';
import TabularView from './views/TabularView';
import PlaneView from './views/PlaneView';
import ExtendedView from './views/ExtendedView';
import { Tabs, Tab, Container, Spinner, Button, Form, Row, Col } from 'react-bootstrap';
import '../index.css';
import './FlightSelector.css';

const FlightRoster = () => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [loading, setLoading] = useState(false);
  const [flightData, setFlightData] = useState(null);
  const [databaseType, setDatabaseType] = useState('NoSQL'); // Default to NoSQL

  const handleFlightSelect = (flight) => {
    setLoading(true);
    setSelectedFlight(flight);
    fetchFlightData(flight.FlightNumber);
  };

  const fetchFlightData = async (flightNumber) => {
    try {
      const rosterResponse = await fetch(`http://localhost:5005/api/roster/flight/${flightNumber}`);
      const rosterData = await rosterResponse.json();

      const pilot = rosterData.pilot;
      const crew = rosterData.crew;
      const passengerIDs = rosterData.flight.PassengerIDs;

      const passengerPromises = passengerIDs.map(id => 
        fetch(`http://localhost:5004/api/passengers/${id}`).then(res => res.json())
      );

      const passengers = await Promise.all(passengerPromises);

      // Fetch flight information to get VehicleType
      const flightInfoResponse = await fetch(`http://localhost:5001/api/flights/${flightNumber}`);
      const flightInfoData = await flightInfoResponse.json();

      setFlightData({
        pilot,
        crew,
        passengers,
        vehicleType: flightInfoData.VehicleType // Add vehicleType here
      });
      setLoading(false);
    } catch (error) {
      console.error('Error fetching flight data:', error);
      setLoading(false);
    }
  };


  const handleDatabaseTypeChange = (e) => {
    setDatabaseType(e.target.value);
  };

  const saveRoster = async () => {
    try {
      const response = await fetch(`http://localhost:5005/api/roster/save-${databaseType.toLowerCase()}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ flightData }),
      });

      if (response.ok) {
        alert(`Roster saved successfully to ${databaseType} database.`);
      } else {
        const errorData = await response.json();
        alert(`Error saving roster: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error saving roster:', error);
      alert('Error saving roster. Check console for details.');
    }
  };

  const exportRoster = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(flightData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `roster_${selectedFlight.FlightNumber}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <Container className="flight-roster-container">
      <h2>Select and View Flight Roster</h2>
      <FlightSelector setSelectedFlight={handleFlightSelect} />
      {loading && (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" />
        </div>
      )}
      {flightData && !loading && (
        <div className="my-4">
          <h2>Flight Roster for {selectedFlight.FlightNumber}</h2>
          <Tabs defaultActiveKey="tabular" id="roster-views" className="mb-3">
            <Tab eventKey="tabular" title="Tabular View">
              <TabularView flight={flightData} />
            </Tab>
            <Tab eventKey="plane" title="Plane View">
              <PlaneView flight={flightData} />
            </Tab>
            <Tab eventKey="extended" title="Extended View">
              <ExtendedView flight={flightData} />
            </Tab>
          </Tabs>
          <Form.Group controlId="databaseType">
            <Form.Label>Select Database Type:</Form.Label>
            <Form.Control as="select" value={databaseType} onChange={handleDatabaseTypeChange}>
              <option value="NoSQL">NoSQL</option>
              <option value="SQL">SQL</option>
            </Form.Control>
          </Form.Group>
          <div className="d-flex justify-content-center mt-3">
            <Button onClick={saveRoster} className="mr-2">Save Roster</Button>
            <Button onClick={exportRoster} variant="danger">Export Roster</Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default FlightRoster;
