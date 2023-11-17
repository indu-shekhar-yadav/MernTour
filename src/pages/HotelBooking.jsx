import React, { useState } from 'react';
import SearchBox from '../shared/SearchBox'; // Import the new component
import '../styles/hotel-booking.css'; // Import the new CSS file

const HotelBooking = () => {
  const [destination, setDestination] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [rooms, setRooms] = useState(1);
  const [children, setChildren] = useState(0);

  const increment = (value, setValue) => {
    if (value < 6) {
      setValue(value + 1);
    }
  };

  const decrement = (value, setValue) => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const renderOptions = (maxValue, label) =>
    [...Array(maxValue)].map((_, index) => (
      <option key={index} value={index + 1}>
        {index + 1} {label}
      </option>
    ));

  const handleSearch = () => {
    // Handle the search functionality based on the selected criteria
    console.log('Destination:', destination);
    console.log('Check-in Date:', checkInDate);
    console.log('Check-out Date:', checkOutDate);
    console.log('Adults:', adults);
    console.log('Rooms:', rooms);
    console.log('Children:', children);
    // Perform the search functionality using the selected criteria
  };

  return (
    <SearchBox
      destination={destination}
      checkInDate={checkInDate}
      checkOutDate={checkOutDate}
      adults={adults}
      rooms={rooms}
      children={children}
      onDestinationChange={setDestination}
      onCheckInDateChange={setCheckInDate}
      onCheckOutDateChange={setCheckOutDate}
      onAdultsChange={setAdults}
      onRoomsChange={setRooms}
      onChildrenChange={setChildren}
      onSearch={handleSearch}
    />
  );
};

export default HotelBooking;
