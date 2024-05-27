// src/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Airline Booking System</h1>
      <p>
        Welcome to our Airline Booking System, where you can easily book your flights to various destinations around the world. Our platform is designed to offer a seamless booking experience with the latest features and secure transactions. 
      </p>
      <p>
        Our mission is to make air travel accessible and convenient for everyone. With our user-friendly interface, you can search for flights, compare prices, and book tickets in just a few clicks.
      </p>
      <h2>Features</h2>
      <ul>
        <li>Easy flight booking</li>
        <li>Secure payment options</li>
        <li>24/7 customer support</li>
        <li>Real-time flight updates</li>
        <li>Loyalty rewards program</li>
      </ul>
      <h2>Our Vision</h2>
      <p>
        We aim to be the leading airline booking platform by continually improving our services and embracing innovative technologies. We strive to provide our customers with the best travel experience possible.
      </p>
    </div>
  );
};

export default About;
