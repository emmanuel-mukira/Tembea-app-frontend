import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';
function CardItem({ src, text, label, path }) {
  return (
    <li className='card-item'>
      <div className='card-item-buttons'>
        <Link to="/hotels" className='card-item-big-button'>
          <span>Hotels</span>
        </Link>
        <Link to="/flights" className='card-item-big-button'>
          <span>Flights</span>
        </Link>
      </div>
    </li>
  );
}
export default CardItem;