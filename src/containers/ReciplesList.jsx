import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../components/Pagination';
import Reciple from '../components/Reciple';

export default function ReciplesList(props) {
  const {
    reciples, itemsCount, pageSize, currentPage, onPageChange,
  } = props;
  return (
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
  );
}

ReciplesList.propTypes = {
  reciples: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
