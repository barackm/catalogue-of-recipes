import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Sort from '../components/Sort';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home-content-main-area d-flex">
        <div className="side-bar-wrapper">
          <h1>sidebar</h1>
        </div>
        <div className="main-home-content">
          <div className="header d-flex flex-between">
            <Search />
            <Sort />
          </div>
        </div>
      </div>
    </div>
  );
}
