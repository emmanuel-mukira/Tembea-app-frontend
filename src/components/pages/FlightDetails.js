import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FlightDetails.css';

function FlightDetails() {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    // Fetch flight details based on id from the backend API
    fetch(`http://localhost:9292/flights/${id}`)
      .then(response => response.json())
      .then(data => setFlight(data));
  }, [id]);

  if (!flight) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flight-details">
      <h1>Flight Details</h1>
      <div className="flight-details__container">
        <img className="flight-details__image" src={flight.image_url} alt="Flight" />
        <table className="flight-details__table">
          <tbody>
            <tr>
              <td>Flight Number:</td>
              <td><strong>{flight.flight_number}</strong></td>
            </tr>
            <tr>
              <td>Departure Airport:</td>
              <td>{flight.departure_airpot}</td>
            </tr>
            <tr>
              <td>Arrival Airport:</td>
              <td>{flight.arrival_airport}</td>
            </tr>
            <tr>
              <td>Arrival Country:</td>
              <td>{flight.arrival_country}</td>
            </tr>
            <tr>
              <td>Departure Time:</td>
              <td>{flight.departure_time}</td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>${flight.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default FlightDetails;
