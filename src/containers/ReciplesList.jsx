import React from 'react';
import PropTypes from 'prop-types';

import Pagination from '../components/Pagination';
import Reciple from '../components/Reciple';

export default function ReciplesList(props) {
  const { reciples } = props;
  return (
    <div className="reciples-list-main-container">
      <div className="reciples-wrapper">
        {reciples.map((reciple) => <Reciple reciple={reciple} key={reciple.idMeal} />)}
      </div>
      <Pagination />
    </div>
  );
}

ReciplesList.propTypes = {
  reciples: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
