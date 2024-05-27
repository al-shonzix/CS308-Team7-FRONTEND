// src/Components/Travel/TravelLocations.jsx
import React from 'react';
import './TravelLocations.css';

// Import images if using from src
import colosseum from './../../assets/colosseum.jpg';
import eiffelTower from './../../assets/eiffel-tower.jpg';
import greatWall from './../../assets/great-wall.jpg';
import machuPicchu from './../../assets/machu-picchu.jpg';
import christRedeemer from './../../assets/christ-redeemer.jpg';
import tajMahal from './../../assets/taj-mahal.jpg';
import statueOfLiberty from './../../assets/statue-of-liberty.jpg';
import sydneyOperaHouse from './../../assets/sydney-opera-house.jpg';
import pyramidsGiza from './../../assets/pyramids-giza.jpg';
import santorini from './../../assets/santorini.jpg';
import grandCanyon from './../../assets/grand-canyon.jpg';
import mountFuji from './../../assets/mount-fuji.jpg';




const travelLocations = [
  {
    country: 'France',
    location: 'Eiffel Tower',
    imageUrl: eiffelTower
  },
  {
    country: 'Italy',
    location: 'Colosseum',
    imageUrl: colosseum
  },
  {
    country: 'Japan',
    location: 'Mount Fuji',
    imageUrl: mountFuji
  },
  {
    country: 'China',
    location: 'Great Wall of China',
    imageUrl: greatWall
  },
  {
    country: 'Peru',
    location: 'Machu Picchu',
    imageUrl: machuPicchu
  },
  {
    country: 'Brazil',
    location: 'Christ the Redeemer',
    imageUrl: christRedeemer
  },
  {
    country: 'India',
    location: 'Taj Mahal',
    imageUrl: tajMahal
  },
  {
    country: 'USA',
    location: 'Statue of Liberty',
    imageUrl: statueOfLiberty
  },
  {
    country: 'Australia',
    location: 'Sydney Opera House',
    imageUrl: sydneyOperaHouse
  },
  {
    country: 'Egypt',
    location: 'Pyramids of Giza',
    imageUrl: pyramidsGiza
  },
  {
    country: 'Greece',
    location: 'Santorini',
    imageUrl: santorini
  },
  {
    country: 'USA',
    location: 'Grand Canyon',
    imageUrl: grandCanyon
  }
];

const TravelLocations = () => {
  return (
    <div className="travel-container">
      <h1>Travel Destinations</h1>
      <div className="locations-grid">
        {travelLocations.map((loc, index) => (
          <div key={index} className="location-card">
            <img src={loc.imageUrl} alt={loc.location} className="location-image" />
            <div className="location-info">
              <h2>{loc.location}</h2>
              <p>{loc.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelLocations;
