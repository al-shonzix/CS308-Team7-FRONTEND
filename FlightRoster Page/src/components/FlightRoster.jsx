import React, { useState } from 'react';
import FlightSelector from './FlightSelector';
import TabularView from './views/TabularView';
import PlaneView from './views/PlaneView';
import ExtendedView from './views/ExtendedView';
import { Tabs, Tab, Container, Spinner } from 'react-bootstrap';
import '../index.css';
import './FlightSelector.css';

const FlightRoster = ({ flights }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFlightSelect = (flight) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedFlight(flight);
      setLoading(false);
    }, 1000); // Simulate a loading delay
  };

  return (
    <Container className="flight-roster-container">
      <h2>Select and View Flight Roster</h2>
      <FlightSelector setSelectedFlight={handleFlightSelect} flights={flights} />
      {loading && (
        <div className="d-flex justify-content-center my-4">
          <Spinner animation="border" />
        </div>
      )}
      {selectedFlight && !loading && (
        <div className="my-4">
          <h2>Flight Roster for {selectedFlight.number}</h2>
          <Tabs defaultActiveKey="tabular" id="roster-views" className="mb-3">
            <Tab eventKey="tabular" title="Tabular View">
              <TabularView flight={selectedFlight} />
            </Tab>
            <Tab eventKey="plane" title="Plane View">
              <PlaneView flight={selectedFlight} />
            </Tab>
            <Tab eventKey="extended" title="Extended View">
              <ExtendedView flight={selectedFlight} />
            </Tab>
          </Tabs>
        </div>
      )}
    </Container>
  );
};

export default FlightRoster;
