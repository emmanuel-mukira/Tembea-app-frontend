import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './HotelDetails.css';

function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);

  useEffect(() => {
    // Fetch hotel details based on id from the backend API
    fetch(`http://localhost:9292/hotels/${id}`)
      .then(response => response.json())
      .then(data => setHotel(data));
  }, [id]);

  if (!hotel) {
    return <div>Loading...</div>;
  }


  return (
    <div className="hotel-details">
      <h1>Hotel Details</h1>
      <div className="hotel-details__container">
        <img className="hotel-details__image" src={hotel.image_url} alt="Hotel" />
        <table className="hotel-details__table">
          <tbody>
            <tr>
              <td>Name:</td>
              <td><strong>{hotel.name}</strong></td>
            </tr>
            <tr>
              <td>Location:</td>
              <td>{hotel.location}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{hotel.address}</td>
            </tr>
            <tr>
              <td>Country:</td>
              <td>{hotel.country}</td>
            </tr>
            <tr>
              <td>Star Rating:</td>
              <td>{hotel.star_rating}</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>${hotel.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HotelDetails;
