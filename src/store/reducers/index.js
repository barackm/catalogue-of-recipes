import { combineReducers } from 'redux';
import recipes from './recipes';
import filter from './filter';
import categories from './categories';

const reducer = combineReducers({ recipes, filter, categories });

export default reducer;
