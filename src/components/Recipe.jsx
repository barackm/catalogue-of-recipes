import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Recipe = (props) => {
  const { recipe } = props;
  const {
    idMeal, strMeal, strCategory, strMealThumb, strArea,
  } = recipe;

  return (
    <Link to={`/recipes/${idMeal}`} className="recipe-item-container">
      <div className="image-wrapper">
        <img src={strMealThumb} alt="recipe" />
      </div>
      <div className="recipe-details">
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
};

Recipe.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Recipe;
