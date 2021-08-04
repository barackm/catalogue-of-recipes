import React from 'react';
import PropTypes from 'prop-types';

export default function Filter(props) {
  const { categories } = props;
  const emojis = ['🍇', '🍔', '🍕', '🍟', '🍣', '🍥', '🍢'];
  const colors = [
    '#934A5F',
    '#333D51',
    '#354649',
    '#9F4298',
    '#F6C026',
    '#DBC1AD',
    '#E2495B',
  ];
  return (
    <div className="filter-main-container">
      <div className="filter-header">
        <h1>
          Recipes
          <span>👨‍🍳</span>
        </h1>
      </div>
      <div className="filter-content">
        <h3>Filter by category</h3>
        <ul className="filter-categories-list">
          {categories.map((category) => (
            <li key={category.idCategory}>
              <a
                href="#f"
                className="category-item d-flex flex-center flex-between"
              >
                {category.strCategory}
                <div
                  className="category-icon-wrapper d-flex flex-center"
                  style={{
                    backgroundColor:
                      colors[Math.floor(Math.random() * colors.length)],
                  }}
                >
                  <span>
                    {emojis[Math.floor(Math.random() * emojis.length)]}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
