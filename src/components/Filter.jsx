import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const {
    categories, selectedCategory, onChangeFilter, error,
  } = props;
  const handleChangeFilter = (e) => {
    e.preventDefault();
    const category = e.target.getAttribute('data-filter');
    onChangeFilter(category);
  };

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
      { error || categories.length === 0 ? (
        <div className="d-flex flex-center list-empty-message">
          😥
          {error || 'Sorry the list is empty.' }
        </div>
      ) : (
        <div className="filter-content">
          <h3>Filter by category</h3>
          <ul className="filter-categories-list">
            <li className={selectedCategory === 'All' ? 'active-category' : ''}>
              <a
                href="#f"
                data-filter="All"
                className="category-item d-flex flex-center flex-between"
                onClick={handleChangeFilter}
              >
                All
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
            {categories.map((category) => (
              <li key={category.idCategory} className={selectedCategory === category.strCategory ? 'active-category' : ''}>
                <a
                  href="#f"
                  data-filter={category.strCategory}
                  className="category-item d-flex flex-center flex-between"
                  onClick={handleChangeFilter}
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
      )}

    </div>
  );
};

Filter.defaultProps = {
  error: '',
};

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
  error: PropTypes.string,
};
export default Filter;
