import { combineReducers } from 'redux';
import recipes from './recipes';
import filter from './filter';
import categories from './categories';
import recipeDetails from './recipeDetails';

const reducer = combineReducers({
  recipes,
  filter,
  categories,
  recipeDetails,

});

export default reducer;
