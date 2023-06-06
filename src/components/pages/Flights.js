import React, { useEffect, useState } from 'react';
import CardItem from '../CardItem';
import '../Cards.css';

function Flights() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Fetch flights data from the backend API
    fetch('http://localhost:9292/flights')
      .then(response => response.json())
      .then(data => setFlights(data));
  }, []);

  return (
    <div>
      <h1>Flights</h1>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {flights.map(flight => (
                <CardItem
                  key={flight.id}
                  src={flight.image_url}
                  text={flight.flight_number}
                  label={flight.status}
                  path={`/flights/${flight.id}`} // Assuming a specific flight details page
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flights;
