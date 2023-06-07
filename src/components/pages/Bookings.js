import React, { useEffect, useState } from 'react';
import './Bookings.css';
// import { AuthContext } from './AuthContext';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [flightName, setFlightName] = useState('');
  const [hotelName, setHotelName] = useState('');

  useEffect(() => {
    // Fetch the list of bookings from the backend API
    fetch('http://localhost:9292/bookings')
      .then(response => response.json())
      .then(data => setBookings(data))
      .catch(error => console.error(error));
  }, []);

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Perform the booking submission logic and update the bookings list
    // Use the check-in and check-out dates from the state (checkInDate and checkOutDate)
    // Use the flight name and hotel name from the state (flightName and hotelName)
    // Send a POST request to the backend API to create the booking

    const newBooking = {
      flight_name: flightName,
      hotel_name: hotelName,
      status: 'pending',
      check_in_date: checkInDate,
      check_out_date: checkOutDate
    };

    fetch('http://localhost:9292/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBooking)
    })
      .then(response => {
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
      .catch(error => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div>
      <h1 className="bookings-title">Bookings</h1>

      <h2 className="bookings-section-title">Book a New Hotel</h2>
      <form className="bookings-form" onSubmit={handleBookingSubmit}>
        <label className="bookings-label">
          Flight Name:
          <input className="bookings-input" type="text" value={flightName} onChange={(e) => setFlightName(e.target.value)} />
        </label>
        <label className="bookings-label">
          Hotel Name:
          <input className="bookings-input" type="text" value={hotelName} onChange={(e) => setHotelName(e.target.value)} />
        </label>
        <label className="bookings-label">
          Check-in Date:
          <input className="bookings-input" type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
        </label>
        <label className="bookings-label">
          Check-out Date:
          <input className="bookings-input" type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
        </label>
        <button className="bookings-submit" type="submit">Book Now</button>
      </form>

      <h2 className="bookings-section-title">Your Bookings</h2>
      <ul className="bookings-list">
        {bookings.map(booking => (
          <li className="bookings-item" key={booking.id}>
            {/* Display the booking details */}
            <div>Flight Name: {booking.flight_name}</div>
            <div>Hotel Name: {booking.hotel_name}</div>
            <div>Status: {booking.status}</div>
            <div>Check-in Date: {booking.check_in_date}</div>
            <div>Check-out Date: {booking.check_out_date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingsPage;
