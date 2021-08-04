import React from 'react';

export default function Pagination() {
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="pagination-main-container">
      <ul>
        {pages.map((page) => <li key={page}>{page}</li>)}
      </ul>
    </div>
  );
}
