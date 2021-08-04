import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import Sort from '../components/Sort';
import ReciplesList from './ReciplesList';

import { loadCategoriesAsync } from '../store/actions';

function Home(props) {
  const { loadCategories, categories } = props;
  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <Header />
      <div className="home-content-main-area d-flex">
        <div className="side-bar-wrapper">
          <Filter categories={categories} />
        </div>
        <div className="main-home-content">
          <div className="header d-flex flex-center flex-between">
            <Search />
            <Sort />
          </div>
          <ReciplesList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

Home.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.reciples.list,
  filter: state.filter,
  categories: state.categories.list,
  loadingCategories: state.categories.loading,
  loadingReciples: state.reciples.loading,
});

const mapDispatchToProps = {
  loadCategories: () => loadCategoriesAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
