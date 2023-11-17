import React from 'react';
import Booking from './HotelBooking';
import wall from '../assets/images/wall.jpg';
import '../styles/hotel.css'; // Import the CSS file

const Hotels = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div>
          <img
            src={wall}
            alt="Hotel"
            className="hotel-image"
          />
        </div>
        <div className="booking">
          <div className='mt-4'>
            <Booking />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hotels;
