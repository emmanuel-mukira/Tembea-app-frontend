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
                  label={hotel.star_rating}
                  path={`/hotels/${hotel.id}`} // Assuming a specific hotel details page
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
