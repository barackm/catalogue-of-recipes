import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FiChevronDown } from 'react-icons/fi';

export default function Sort() {
  const [sortMethod, setSortMethod] = useState('None');
  const [showSort, setShowSort] = useState(false);

  const sortOptions = ['None', 'Name', 'Category'];
  const handleChangeSortMethod = (method) => {
    setSortMethod(method);
    setShowSort(false);
  };

  const handleToggleSort = () => {
    setShowSort(!showSort);
  };

  return (
    <div className="sort-main-wrapper d-flex flex-center flex-between">
      <span>sort by: </span>
      <a className="selected-filter-method d-flex flex-center" href="#f" onClick={handleToggleSort}>
        {sortMethod}
        <IconContext.Provider value={{ className: 'sort-arrow' }}>
          <FiChevronDown />
        </IconContext.Provider>
      </a>
      <ul className={showSort ? 'sort-method-list shown' : 'sort-method-list'}>
        {sortOptions.map((s) => (
          <li key={s}>
            <a href="#f" onClick={() => handleChangeSortMethod(s)}>
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
