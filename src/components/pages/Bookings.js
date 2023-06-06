import React, { useState } from 'react';
import '../../App.css';

export default function Bookings(props) {
  const { flightDetails, hotelDetails } = props;

  // State to store user input for booking details
  const [selectedFlight, setSelectedFlight] = useState('');
  const [selectedHotel, setSelectedHotel] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform booking logic with selectedFlight and selectedHotel values
    // ...
  };

  return (
    <div>
      <h1 className='bookings'>Book Now</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Flight:
          <select value={selectedFlight} onChange={(e) => setSelectedFlight(e.target.value)}>
            <option value="">Select Flight</option>
            {/* Render flight options */}
            {flightDetails.map((flight) => (
              <option key={flight.id} value={flight.id}>
                {flight.flight_number}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Select Hotel:
          <select value={selectedHotel} onChange={(e) => setSelectedHotel(e.target.value)}>
            <option value="">Select Hotel</option>
            {/* Render hotel options */}
            {hotelDetails.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
