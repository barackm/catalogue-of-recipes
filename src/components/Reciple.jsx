import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function Reciple(props) {
  const { reciple } = props;
  const {
    idMeal, strMeal, strCategory, strMealThumb, strArea,
  } = reciple;

  return (
    <Link to={`reciples/${idMeal}`} className="reciple-item-container">
      <div className="image-wrapper">
        <img src={strMealThumb} alt="reciple" />
      </div>
      <div className="reciple-details">
        <h3 className="name">{strMeal}</h3>
        <div className="category-area-container d-flex flex-center flex-between">
          <div className="category">
            <span>{strCategory}</span>
          </div>
          <h4 className="from">
            From:
            {' '}
            <span>{strArea}</span>
          </h4>
        </div>
      </div>
    </Link>
  );
}

Reciple.propTypes = {
  reciple: PropTypes.objectOf(PropTypes.string).isRequired,
};
