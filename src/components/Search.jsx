import React from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';

const Search = (props) => {
  const { query, onChange } = props;
  return (
    <div className="search-bar-main-container d-flex flex-center">
      <IconContext.Provider value={{ className: 'search-icon' }}>
        <FiSearch />
      </IconContext.Provider>
      <input
        type="text"
        value={query}
        onChange={onChange}
        className="search-input"
        placeholder="Search recipes by name or area..."
      />
    </div>
  );
};

Search.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
