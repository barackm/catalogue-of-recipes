import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Filter from '../components/Filter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Search from '../components/Search';
import Sort from '../components/Sort';
import ReciplesList from './ReciplesList';

import {
  changeFilter,
  loadCategoriesAsync,
  loadReciplesAsync,
} from '../store/actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: 'All',
      query: '',
      orderColumn: 'None',
    };
  }

  componentDidMount() {
    const { loadCategories, loadReciples } = this.props;
    loadCategories();
    loadReciples();
  }

  handleSearchReciple = (e) => {
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
  }

  renderFilteredRecipes = (reciples) => {
    const { filter } = this.props;
    if (filter === 'All') return reciples;
    return reciples.filter((reciple) => reciple.strCategory.includes(filter));
  };

  renderSearchedRecipes = (reciples) => {
    const { query } = this.state;
    if (query === '') return reciples;

    return reciples.filter(
      (reciple) => reciple.strMeal.toLowerCase().includes(query.toLocaleLowerCase())
        || reciple.strArea.toLowerCase().includes(query.toLocaleLowerCase()),
    );
  };

  renderSortedRecipes = (reciples) => {
    const { orderColumn } = this.state;
    if (orderColumn === 'None') return reciples;
    const iteratee = orderColumn === 'Name' ? 'strMeal' : 'strArea';
    return _.orderBy(reciples, iteratee, 'ASC');
  }

  render() {
    const { categories, reciples } = this.props;
    const { selectedCategory, query, orderColumn } = this.state;
    const filteredReciples = this.renderFilteredRecipes(reciples);
    const searchedReciples = this.renderSearchedRecipes(filteredReciples);
    const sortedReciples = this.renderSortedRecipes(searchedReciples);

    return (
      <div>
        <Header />
        <div className="home-content-main-area d-flex">
          <div className="side-bar-wrapper">
            <Filter
              categories={categories}
              selectedCategory={selectedCategory}
              onChangeFilter={this.handleSeletectCategory}
            />
          </div>
          <div className="main-home-content">
            <div className="header d-flex flex-center flex-between">
              <Search query={query} onChange={this.handleSearchReciple} />
              <Sort onChangeSortColumn={this.handleChangeOrderColumn} activeColumn={orderColumn} />
            </div>
            <ReciplesList reciples={sortedReciples} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

Home.propTypes = {
  loadCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  loadReciples: PropTypes.func.isRequired,
  reciples: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  reciples: state.reciples.list,
  filter: state.filter,
  categories: state.categories.list,
  loadingCategories: state.categories.loading,
  loadingReciples: state.reciples.loading,
});

const mapDispatchToProps = {
  loadCategories: () => loadCategoriesAsync(),
  loadReciples: () => loadReciplesAsync(),
  changeFilter: (filter) => changeFilter(filter),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
