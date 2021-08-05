import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = (props) => {
  const {
    currentPage, onPageChange, pageSize, itemsCount,
  } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount <= 1) return <></>;
  const pages = _.range(1, pageCount + 1);

  return (
    <div className="pagination-main-container d-flex flex-center">
      <ul className="d-flex">
        {pages.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={
              currentPage === page
                ? 'pagination-item active'
                : 'pagination-item'
            }
          >
            {page}
          </button>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default Pagination;
