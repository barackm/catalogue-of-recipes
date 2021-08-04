import React from 'react';

export default function Pagination() {
  const pages = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="pagination-main-container d-flex flex-center">
      <ul className="d-flex">
        {pages.map((page) => <li key={page} className="pagination-item">{page}</li>)}
      </ul>
    </div>
  );
}
