// SearchBox.jsx

import React from 'react';
import PropTypes from 'prop-types';
import './search-box.css'; // Import the new CSS file

const SearchBox = ({
  destination,
  checkInDate,
  checkOutDate,
  adults,
  rooms,
  children,
  onDestinationChange,
  onCheckInDateChange,
  onCheckOutDateChange,
  onAdultsChange,
  onRoomsChange,
  onChildrenChange,
  onSearch,
}) => {
  const renderOptions = (maxValue, label) =>
    [...Array(maxValue)].map((_, index) => (
      <option key={index} value={index + 1}>
        {index + 1} {label}
      </option>
    ));

  return (
    <div className="search-box">
      <form className="search-form">
        {/* 'Destination' field */}
        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="w-1/3 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />

        {/* 'Check-in, Check-out' fields */}
        <div className="flex items-center">
          <input
            type="date"
            value={checkInDate}
            onChange={(e) => onCheckInDateChange(e.target.value)}
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <span className="mx-4">to</span>
          <input
            type="date"
            value={checkOutDate}
            onChange={(e) => onCheckOutDateChange(e.target.value)}
            className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* 'Adults, Room, Children' fields */}
        <div className="flex items-center">
          {/* Adults */}
          <div className="flex items-center mx-4">
            <button onClick={() => onAdultsChange(adults - 1)} disabled={adults <= 1}><b>-</b></button>
            <select
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              value={adults}
              onChange={(e) => onAdultsChange(Number(e.target.value))}
            >
              {renderOptions(6, 'Adult')}
            </select>
            <button onClick={() => onAdultsChange(adults + 1)} disabled={adults >= 6}><b>+</b></button>
          </div>

          {/* Rooms */}
          <div className="flex items-center mx-4">
            <button onClick={() => onRoomsChange(rooms - 1)} disabled={rooms <= 1}><b>-</b></button>
            <select
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              value={rooms}
              onChange={(e) => onRoomsChange(Number(e.target.value))}
            >
              {renderOptions(6, 'Room')}
            </select>
            <button onClick={() => onRoomsChange(rooms + 1)} disabled={rooms >= 6}><b>+</b></button>
          </div>

          {/* Children */}
          <div className="flex items-center mx-4">
            <button onClick={() => onChildrenChange(children - 1)} disabled={children <= 0}><b>-</b></button>
            <select
              className="p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              value={children}
              onChange={(e) => onChildrenChange(Number(e.target.value))}
            >
              {renderOptions(6, 'Children')}
            </select>
            <button onClick={() => onChildrenChange(children + 1)} disabled={children >= 6}><b>+</b></button>
          </div>
        </div>

        <div className="flex justify-center">
          {/* Search button */}
          <button onClick={onSearch} className="search-button">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  destination: PropTypes.string,
  checkInDate: PropTypes.string,
  checkOutDate: PropTypes.string,
  adults: PropTypes.number,
  rooms: PropTypes.number,
  children: PropTypes.number,
  onDestinationChange: PropTypes.func,
  onCheckInDateChange: PropTypes.func,
  onCheckOutDateChange: PropTypes.func,
  onAdultsChange: PropTypes.func,
  onRoomsChange: PropTypes.func,
  onChildrenChange: PropTypes.func,
  onSearch: PropTypes.func,
};

export default SearchBox;
