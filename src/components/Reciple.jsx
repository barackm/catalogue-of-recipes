import React from 'react';
import { Link } from 'react-router-dom';

export default function Reciple() {
  return (
    <Link to={`reciples/${13629}`} className="reciple-item-container">
      <div className="image-wrapper">
        <img src="https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg" alt="reciple" />
      </div>
      <div className="reciple-details">
        <h3 className="name">Big Mac</h3>
        <div className="category-area-container d-flex flex-center flex-between">
          <div className="category">
            <span>Beef</span>
          </div>
          <h4 className="from">
            From:
            {' '}
            <span>American</span>
          </h4>
        </div>
      </div>
    </Link>
  );
}
