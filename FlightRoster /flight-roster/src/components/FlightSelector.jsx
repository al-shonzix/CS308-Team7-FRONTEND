import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Container, Card, Button } from 'react-bootstrap';
import './FlightSelector.css';

const FlightSelector = ({ setSelectedFlight }) => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [flightNumber, setFlightNumber] = useState('');
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    fetch('http://localhost:5001/api/flights')
      .then(response => response.json())
      .then(data => {
        setFlights(data);
      })
      .catch(error => console.error('Error fetching flights:', error));
  }, []);

  const handleFlightNumberChange = (e) => {
    setFlightNumber(e.target.value);
  };

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const filterFlights = () => {
    let filtered = flights;

    if (flightNumber) {
      filtered = filtered.filter(flight => flight.FlightNumber.includes(flightNumber));
    }
    if (source) {
      filtered = filtered.filter(flight => flight.FlightSource.City.toLowerCase().includes(source.toLowerCase()));
    }
    if (destination) {
      filtered = filtered.filter(flight => flight.FlightDestination.City.toLowerCase().includes(destination.toLowerCase()));
    }
    if (date) {
      filtered = filtered.filter(flight => new Date(flight.Date).toISOString().split('T')[0] === date);
    }

    setFilteredFlights(filtered);
  };

  const handleSelect = (flightId) => {
    const selected = filteredFlights.find((flight) => flight._id === flightId);
    setSelectedFlight(selected);
  };

  return (
    <Container className="flight-selector-container">
      <h2 className="text-center my-4">Select Flight</h2>
      <Form>
        <Row className="justify-content-center mb-3">
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Enter Flight Number"
              value={flightNumber}
              onChange={handleFlightNumberChange}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Enter Source City"
              value={source}
              onChange={handleSourceChange}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="text"
              placeholder="Enter Destination City"
              value={destination}
              onChange={handleDestinationChange}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              type="date"
              value={date}
              onChange={handleDateChange}
            />
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col md="auto">
            <Button onClick={filterFlights} className="btn-center">Filter Flights</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        {filteredFlights.map((flight) => (
          <Col md={4} key={flight._id} className="mb-4">
            <Card onClick={() => handleSelect(flight._id)} className="flight-card shadow-sm">
              <Card.Body>
                <Card.Title>{flight.FlightNumber}</Card.Title>
                <Card.Text>{new Date(flight.Date).toLocaleString()}</Card.Text>
                <Card.Text>{flight.FlightSource.City} to {flight.FlightDestination.City}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FlightSelector;
