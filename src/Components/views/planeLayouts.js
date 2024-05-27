// src/components/views/planeLayouts.js

export const seatLayouts = {
  'Boeing 737': {
    rows: 30,
    seatsPerRow: 'ABC DEF',
  },
  'Boeing 777': {
    rows: 40,
    seatsPerRow: 'ABC DEFG HJK',
  },
  'Boeing 747': {
    rows: 45,
    seatsPerRow: 'ABC DEFGH JKL',
  },
  'Airbus A330': {
    rows: 35,
    seatsPerRow: 'ABCD EFGH',
  },
  'Boeing 757': {
    rows: 30,
    seatsPerRow: 'ABC DEF',
  },
  'Airbus A380': {
    rows: 50,
    seatsPerRow: 'ABC DEFGH JKL',
  },
  'Boeing 737 Max': {
    rows: 32,
    seatsPerRow: 'ABC DEF',
  },
  'Airbus A350': {
    rows: 40,
    seatsPerRow: 'ABC DEFGH JKL',
  },
  'Boeing 787': {
    rows: 40,
    seatsPerRow: 'ABC DEFGH JKL',
  },
};

export const getSeatLayout = (model) => seatLayouts[model] || null;
