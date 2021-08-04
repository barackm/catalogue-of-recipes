import React from 'react';
import { IconContext } from 'react-icons';
import { FiSearch } from 'react-icons/fi';

export default function Search() {
  return (
    <div className="search-bar-main-container d-flex flex-center">
      <IconContext.Provider value={{ className: 'search-icon' }}>
        <FiSearch />
      </IconContext.Provider>
      <input type="text" className="search-input" placeholder="Search reciples..." />
    </div>
  );
}
