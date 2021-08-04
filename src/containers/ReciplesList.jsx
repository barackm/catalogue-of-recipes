import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../components/Pagination';
import Reciple from '../components/Reciple';

export default function ReciplesList(props) {
  const {
    reciples, itemsCount, pageSize, currentPage, onPageChange, error,
  } = props;
  return (
    (error || reciples.length === 0) ? (
      <div className="d-flex flex-center list-empty-message">
        😥
        {error || 'Sorry the list is empty.' }
      </div>
    ) : (
      <div className="reciples-list-main-container">
        <div className="reciples-wrapper">
          {reciples.map((reciple) => (
            <Reciple reciple={reciple} key={reciple.idMeal} />
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

ReciplesList.defaultProps = {
  itemsCount: 0,
  error: '',
};

ReciplesList.propTypes = {
  reciples: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  itemsCount: PropTypes.number,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};
