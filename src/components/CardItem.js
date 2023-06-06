import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

function CardItem(props) {
  const { src, text, label, path, data } = props;

  return (
    <li className='cards__item'>
      <Link className='cards__item__link' to={path}>
        <figure className='cards__item__pic-wrap' data-category={label}>
          <img className='cards__item__img' alt='Travel' src={src} />
        </figure>
        <div className='cards__item__info'>
          <h5 className='cards__item__text'>{text}</h5>
          {data && Object.entries(data).length > 0 && (
            <ul className='cards__item__details'>
              {Object.entries(data).map(([key, value]) => (
                <li key={key}>
                  <span>{key}:</span> {value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
