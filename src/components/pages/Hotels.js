import React, { useEffect, useState } from 'react';
import CardItem from '../CardItem';
import '../Cards.css';

function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotels data from the backend API
    fetch('http://localhost:9292/hotels')
      .then(response => response.json())
      .then(data => setHotels(data));
  }, []);

  return (
    <div>
      <h1>Hotels</h1>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              {hotels.map(hotel => (
                <CardItem
                  key={hotel.id}
                  src={hotel.image_url}
                  text={hotel.name}
                  label='Hotel'
                  path={`/hotels/${hotel.id}`}
                  data={{
                    Location: hotel.location,
                    Address: hotel.address,
                    Country: hotel.country,
                    'Star Rating': hotel.star_rating,
                    Price: hotel.price
                    // Add more hotel-specific details as needed
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hotels;
