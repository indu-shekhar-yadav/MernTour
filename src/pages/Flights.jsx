// Flights.jsx

import React from 'react';
import FlightBooking from './FlightBooking'; // Make sure to provide the correct path to the FlightBooking component
import plane from '../assets/images/plane.jpg';
import '../styles/flights.css';

const Flights = () => {
  return (
    <section className="section">
      <div className="image-section">
        <h1 className="heading-text">All Flights</h1>
        <img src={plane} alt="Airplane" className="plane-image" />
      </div>
      <div className="booking-section">
        <FlightBooking />
      </div>
    </section>
  );
};

export default Flights;
