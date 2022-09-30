import React from 'react';
import PropTypes from 'prop-types';
import Pagination from '../components/Pagination';
import Recipe from '../components/Recipe';

export default function RecipesList(props) {
  const {
    recipes, itemsCount, pageSize, currentPage, onPageChange, error,
  } = props;

  return (
    (error || recipes.length === 0) ? (
      <div className="d-flex flex-center list-empty-message">
        😥
        {error || 'Sorry the list is empty.' }
      </div>
    ) : (
      <div className="recipes-list-main-container">
        <div className="recipes-wrapper">
          {recipes.map((recipe) => (
            <Recipe recipe={recipe} key={recipe.idMeal} />
          ))}
        </div>
        <Pagination
          itemsCount={itemsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    )
  );
}

RecipesList.defaultProps = {
  itemsCount: 0,
  error: '',
};

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  itemsCount: PropTypes.number,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
