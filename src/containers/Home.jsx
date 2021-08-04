import React from 'react';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Search from '../components/Search';
import Sort from '../components/Sort';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home-content-main-area d-flex">
        <div className="side-bar-wrapper">
          <Filter />
        </div>
        <div className="main-home-content">
          <div className="header d-flex flex-center flex-between">
            <Search />
            <Sort />
          </div>
        </div>
      </div>
    </div>
  );
}
