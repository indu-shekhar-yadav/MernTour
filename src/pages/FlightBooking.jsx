// FlightBooking.jsx

import React, { useState } from 'react';
import '../styles/flight-booking.css'; // Import the new CSS file
import plane from '../assets/images/plane.jpg';

const FlightBooking = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [tripType, setTripType] = useState('roundTrip');
  const [cabinClass, setCabinClass] = useState('economy');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSearch = () => {
    // Handle the search functionality based on the selected criteria
    console.log('From:', from);
    console.log('To:', to);
    console.log('Trip Type:', tripType);
    console.log('Cabin Class:', cabinClass);
    console.log('Departure Date:', departureDate);
    console.log('Return Date:', returnDate);
    // Perform the search functionality using the selected criteria
  };

  return (
    <div className="search__bar-flight">
      <form className="flight-search-form">
        <div className="mb-4">
          <input
            type="text"
            placeholder="From"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 flex justify-between">
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="roundTrip">Round Trip</option>
            <option value="oneWay">One Way</option>
          </select>
          <select
            value={cabinClass}
            onChange={(e) => setCabinClass(e.target.value)}
            className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          >
            <option value="economy">Economy</option>
            <option value="business">Business</option>
          </select>
        </div>
        <div className="mb-4 flex justify-between">
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          {tripType === 'roundTrip' && (
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          )}
        </div>
        <div className="button-container">
          <button onClick={handleSearch} to="/Flights/getflights" className="search-button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FlightBooking;
