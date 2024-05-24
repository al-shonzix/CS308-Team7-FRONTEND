import React from 'react';
import { Form, Row, Col, Container, Card } from 'react-bootstrap';
import './FlightSelector.css';

const FlightSelector = ({ setSelectedFlight, flights }) => {
  const handleSelect = (event) => {
    const flightId = event.target.value;
    const selected = flights.find((flight) => flight.id === flightId);
    setSelectedFlight(selected);
  };

  return (
    <Container className="flight-selector-container">
      <h2 className="text-center my-4">Select Flight</h2>
      <Form>
        <Row className="justify-content-center mb-3">
          <Col md={6}>
            <Form.Select aria-label="Select Flight" onChange={handleSelect} className="mb-4">
              <option value="">Select a flight</option>
              {flights.map((flight) => (
                <option key={flight.id} value={flight.id}>
                  {flight.number} - {flight.date}
                </option>
              ))}
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Row>
        {flights.map((flight) => (
          <Col md={4} key={flight.id} className="mb-4">
            <Card onClick={() => setSelectedFlight(flight)} className="flight-card shadow-sm">
              <Card.Body>
                <Card.Title>{flight.number}</Card.Title>
                <Card.Text>{flight.date}</Card.Text>
                <Card.Text>{flight.source.city} to {flight.destination.city}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FlightSelector;
