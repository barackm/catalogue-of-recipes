import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HashLoader from 'react-spinners/HashLoader';
import _ from 'lodash';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Search from '../components/Search';
import Sort from '../components/Sort';
import RecipesList from './RecipesList';

import {
  changeFilter,
  loadCategoriesAsync,
  loadRecipesAsync,
} from '../store/actions';

import paginate from '../components/utils/paginate';

const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [orderColumn, setOrderColumn] = useState('None');
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const { loadCategories, loadRecipes } = props;

  useEffect(() => {
    loadCategories();
    loadRecipes();
  }, [loadCategories, loadRecipes]);

  // componentDidMount() {

  // }

  const handleSearchRecipe = (e) => {
    const { changeFilter } = props;
    changeFilter('All');
    setQuery({ query: e.target.value, selectedCategory: 'All' });
  };

  const handleSeletectCategory = (category) => {
    const { changeFilter } = props;
    setSelectedCategory({ selectedCategory: category, query: '', currentPage: 1 });
    changeFilter(category);
  };

  const handleChangeOrderColumn = (orderColumn) => {
    setOrderColumn({ orderColumn });
  };

  const handlePageChange = (currentPage) => {
    setCurrentPage({ currentPage });
  };

  const renderFilteredRecipes = (recipes) => {
    const { filter } = props;
    if (filter === 'All') return recipes;
    return recipes.filter((recipe) => recipe.strCategory.includes(filter));
  };

  const renderSearchedRecipes = (recipes) => {
    if (query === '') return recipes;

    return recipes.filter(
      (recipe) => recipe.strMeal.toLowerCase().includes(query.toLocaleLowerCase())
        || recipe.strArea.toLowerCase().includes(query.toLocaleLowerCase()),
    );
  };

  const renderSortedRecipes = (recipes) => {
    if (orderColumn === 'None') return recipes;
    const iteratee = orderColumn === 'Name' ? 'strMeal' : 'strArea';
    return _.orderBy(recipes, iteratee, 'ASC');
  };

  const {
    categories,
    recipes,
    loadingCategories,
    loadingRecipes,
    loadCategoriesError,
    loadRecipesError,
  } = props;
  const filteredRecipes = renderFilteredRecipes(recipes);
  const searchedRecipes = renderSearchedRecipes(filteredRecipes);
  const sortedRecipes = renderSortedRecipes(searchedRecipes);
  const pagedRecipes = paginate(sortedRecipes, currentPage, pageSize);

  // if (!username) {
  //   console.log(currentUserName);
  //   return '402: You need to sign in or sign up before continuing.';
  // }
  return (
    <div>
      <Header icon="👋 " message="Hello " />
      <div className="home-content-main-area d-flex">
        <div className="side-bar-wrapper">
          {loadingCategories && (
            <div className="loading-spinner-wrapper d-flex flex-center">
              <HashLoader color="#e0aea6" loading={loadingRecipes} size={70} />
            </div>
          )}
          {!loadingCategories && (
            <Filter
              categories={categories}
              selectedCategory={selectedCategory}
              onChangeFilter={handleSeletectCategory}
              error={loadCategoriesError}
            />
          )}
        </div>
        <div className="main-home-content">
          <div className="header d-flex flex-center flex-between">
            <Search query={query} onChange={handleSearchRecipe} />
            <Sort
              onChangeSortColumn={handleChangeOrderColumn}
              activeColumn={orderColumn}
            />
          </div>
          {loadingRecipes && (
            <div className="loading-spinner-wrapper d-flex flex-center">
              <HashLoader color="#e0aea6" loading={loadingRecipes} size={70} />
            </div>
          )}
          {!loadingRecipes && (
            <RecipesList
              recipes={pagedRecipes}
              itemsCount={sortedRecipes && sortedRecipes.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
              error={loadRecipesError}
            />
          )}
        </div>
      </div>
    </div>
  );
};

Home.defaultProps = {
  loadRecipesError: '',
  loadCategoriesError: '',
};

Home.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loadRecipes: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  loadingCategories: PropTypes.bool.isRequired,
  loadingRecipes: PropTypes.bool.isRequired,
  loadCategoriesError: PropTypes.string,
  loadRecipesError: PropTypes.string,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes.list,
  filter: state.filter,
  categories: state.categories.list,
  loadingCategories: state.categories.loading,
  loadingRecipes: state.recipes.loading,
  loadCategoriesError: state.categories.error,
  loadRecipesError: state.recipes.error,
});

const mapDispatchToProps = {
  loadCategories: () => loadCategoriesAsync(),
  loadRecipes: () => loadRecipesAsync(),
  changeFilter: (filter) => changeFilter(filter),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
