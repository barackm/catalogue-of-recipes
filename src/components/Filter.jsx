import React from 'react';

export default function Filter() {
  const categories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'category1' },
    { id: 3, name: 'category2' },
    { id: 4, name: 'category3' },
    { id: 5, name: 'category4' },
    { id: 6, name: 'category5' },
  ];
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
            <li key={category.id}>
              <a
                href="#f"
                className="category-item d-flex flex-center flex-between"
              >
                {category.name}
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
