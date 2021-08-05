import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Sort = (props) => {
  const [showSort, setShowSort] = useState(false);
  const { onChangeSortColumn, activeColumn } = props;
  const sortOptions = ['None', 'Name', 'Area'];
  const handleToggleSort = () => {
    setShowSort(!showSort);
  };

  const handleChangeSortMethod = (e) => {
    onChangeSortColumn(e.target.getAttribute('data-sort'));
    setShowSort(false);
  };

  return (
    <div className="sort-main-wrapper d-flex flex-center flex-between">
      <span>Sort By: </span>
      <a className="selected-filter-method d-flex flex-center" href="#f" onClick={handleToggleSort}>
        {activeColumn}
        <IconContext.Provider value={{ className: 'sort-arrow' }}>
          {showSort ? <FiChevronUp /> : <FiChevronDown />}
        </IconContext.Provider>
      </a>
      <ul className={showSort ? 'sort-method-list shown' : 'sort-method-list'}>
        {sortOptions.map((s) => (
          <li key={s}>
            <a href="#f" onClick={handleChangeSortMethod} value={s} data-sort={s}>
              {s}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sort.propTypes = {
  activeColumn: PropTypes.string.isRequired,
  onChangeSortColumn: PropTypes.func.isRequired,
};

export default Sort;
