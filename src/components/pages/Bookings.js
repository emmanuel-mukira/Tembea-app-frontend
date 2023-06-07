import React, { useEffect, useState, useContext } from 'react';
import './Bookings.css';
import { AuthContext } from './AuthContext';

const BookingsPage = () => {
  const { user_id } = useContext(AuthContext); // Access userId from AuthContext
  const [bookings, setBookings] = useState([]);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [flightName, setFlightName] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [status, setStatus] = useState('');
  const [flightOptions, setFlightOptions] = useState([]);
  const [hotelOptions, setHotelOptions] = useState([]);
  
  useEffect(() => {
  // Fetch flight options
  fetch('http://localhost:9292/flights')
    .then((response) => response.json())
    .then((data) => setFlightOptions(data))
    .catch((error) => console.error(error));

  // Fetch hotel options
  fetch('http://localhost:9292/hotels')
    .then((response) => response.json())
    .then((data) => setHotelOptions(data))
    .catch((error) => console.error(error));
}, []);
  useEffect(() => {
    console.log(user_id);

    // Fetch the list of bookings from the backend API
    fetch(`http://localhost:9292/bookings?user_id=${user_id}`)
      .then((response) => response.json())
      .then((data) => setBookings(data))
      .catch((error) => console.error(error));
  }, [user_id]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Perform the booking submission logic and update the bookings list
    // Use the check-in and check-out dates from the state (checkInDate and checkOutDate)
    // Use the flight name and hotel name from the state (flightName and hotelName)
    // Send a POST request to the backend API to create the booking

    const newBooking = {
      flight_name: flightName,
      hotel_name: hotelName,
      status: status,
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      user_id: user_id, // Include the userId in the new booking data
    };

    fetch('http://localhost:9292/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking),
    })
      .then((response) => {
        if (response.ok) {
          // Booking created successfully, update the bookings list
          setBookings([...bookings, newBooking]);
          // Clear the form fields
          setCheckInDate('');
          setCheckOutDate('');
          setFlightName('');
          setHotelName('');
        } else {
          // Error creating booking, handle the error accordingly
          throw new Error('Failed to create booking');
        }
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="bookings-title">Bookings</h1>

      <h2 className="bookings-section-title">Book a New Hotel</h2>
      <form className="bookings-form" onSubmit={handleBookingSubmit}>
  <div className="form-field">
    <label className="form-label" htmlFor="status">Status:</label>
    <select
      className="form-dropdown"
      id="status"
      value={status}
      onChange={(e) => setStatus(e.target.value)}
    >
      <option value="">Select Status</option>
      <option value="pending">Pending</option>
      <option value="confirmed">Confirmed</option>
      <option value="cancelled">Cancelled</option>
    </select>
  </div>
  <div className="form-field">
    <label className="form-label" htmlFor="flightName">Flight Name:</label>
    <select
      className="form-dropdown"
      id="flightName"
      value={flightName}
      onChange={(e) => setFlightName(e.target.value)}
    >
      <option value="">Select Flight</option>
      {flightOptions.map((flight) => (
        <option key={flight.id} value={flight.flight_number}>
          {flight.flight_number}
        </option>
      ))}
    </select>
  </div>
  <div className="form-field">
    <label className="form-label" htmlFor="hotelName">Hotel Name:</label>
    <select
      className="form-dropdown"
      id="hotelName"
      value={hotelName}
      onChange={(e) => setHotelName(e.target.value)}
    >
      <option value="">Select Hotel</option>
      {hotelOptions.map((hotel) => (
        <option key={hotel.id} value={hotel.name}>
          {hotel.name}
        </option>
      ))}
    </select>
  </div>
  <div className="form-field">
    <label className="form-label" htmlFor="checkInDate">Check-in Date:</label>
    <input
      className="form-input"
      type="date"
      id="checkInDate"
      value={checkInDate}
      onChange={(e) => setCheckInDate(e.target.value)}
    />
  </div>
  <div className="form-field">
    <label className="form-label" htmlFor="checkOutDate">Check-out Date:</label>
    <input
      className="form-input"
      type="date"
      id="checkOutDate"
      value={checkOutDate}
      onChange={(e) => setCheckOutDate(e.target.value)}
    />
  </div>
  <button className="form-submit" type="submit">
    Book Now
  </button>
</form>
      <h2 className="bookings-section-title">Your Bookings</h2>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>Flight Name</th>
            <th>Hotel Name</th>
            <th>Status</th>
            <th>Check-in Date</th>
            <th>Check-out Date</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr className="bookings-row" key={booking.id}>
              <td>{booking.flight_name}</td>
              <td>{booking.hotel_name}</td>
              <td>{booking.status}</td>
              <td>{booking.check_in_date}</td>
              <td>{booking.check_out_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsPage;
