import React from 'react';
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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
      query: '',
      orderColumn: 'None',
      pageSize: 6,
      currentPage: 1,
    };
  }

  componentDidMount() {
    const { loadCategories, loadRecipes } = this.props;
    loadCategories();
    loadRecipes();
  }

  handleSearchRecipe = (e) => {
    const { changeFilter } = this.props;
    changeFilter('All');
    this.setState({ query: e.target.value, selectedCategory: 'All' });
  };

  handleSeletectCategory = (category) => {
    const { changeFilter } = this.props;
    this.setState({ selectedCategory: category, query: '' });
    changeFilter(category);
  };

  handleChangeOrderColumn = (orderColumn) => {
    this.setState({ orderColumn });
  };

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };

  renderFilteredRecipes = (recipes) => {
    const { filter } = this.props;
    if (filter === 'All') return recipes;
    return recipes.filter((recipe) => recipe.strCategory.includes(filter));
  };

  renderSearchedRecipes = (recipes) => {
    const { query } = this.state;
    if (query === '') return recipes;

    return recipes.filter(
      (recipe) => recipe.strMeal.toLowerCase().includes(query.toLocaleLowerCase())
        || recipe.strArea.toLowerCase().includes(query.toLocaleLowerCase()),
    );
  };

  renderSortedRecipes = (recipes) => {
    const { orderColumn } = this.state;
    if (orderColumn === 'None') return recipes;
    const iteratee = orderColumn === 'Name' ? 'strMeal' : 'strArea';
    return _.orderBy(recipes, iteratee, 'ASC');
  };

  render() {
    const {
      categories,
      recipes,
      loadingCategories,
      loadingRecipes,
      loadCategoriesError,
      loadRecipesError,
    } = this.props;
    const {
      selectedCategory, query, orderColumn, currentPage, pageSize,
    } = this.state;
    const filteredRecipes = this.renderFilteredRecipes(recipes);
    const searchedRecipes = this.renderSearchedRecipes(filteredRecipes);
    const sortedRecipes = this.renderSortedRecipes(searchedRecipes);
    const pagedRecipes = paginate(sortedRecipes, currentPage, pageSize);
    return (
      <div>
        <Header />
        <div className="home-content-main-area d-flex">
          <div className="side-bar-wrapper">
            {loadingCategories && (
              <div className="loading-spinner-wrapper d-flex flex-center">
                <HashLoader
                  color="#e0aea6"
                  loading={loadingRecipes}
                  size={70}
                />
              </div>
            )}
            {!loadingCategories && (
              <Filter
                categories={categories}
                selectedCategory={selectedCategory}
                onChangeFilter={this.handleSeletectCategory}
                error={loadCategoriesError}
              />
            )}
          </div>
          <div className="main-home-content">
            <div className="header d-flex flex-center flex-between">
              <Search query={query} onChange={this.handleSearchRecipe} />
              <Sort
                onChangeSortColumn={this.handleChangeOrderColumn}
                activeColumn={orderColumn}
              />
            </div>
            {loadingRecipes && (
              <div className="loading-spinner-wrapper d-flex flex-center">
                <HashLoader
                  color="#e0aea6"
                  loading={loadingRecipes}
                  size={70}
                />
              </div>
            )}
            {!loadingRecipes && (
              <RecipesList
                recipes={pagedRecipes}
                itemsCount={sortedRecipes && sortedRecipes.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                error={loadRecipesError}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

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
