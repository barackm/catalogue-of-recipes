import React from 'react';
import Pagination from '../components/Pagination';
import Reciple from '../components/Reciple';

export default function ReciplesList() {
  return (
    <div className="reciples-list-main-container">
      <div className="reciples-wrapper">
        <Reciple />
        <Reciple />
        <Reciple />
        <Reciple />
        <Reciple />
        <Reciple />
      </div>
      <Pagination />
    </div>
  );
}
