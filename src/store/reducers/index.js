import { combineReducers } from 'redux';
import reciples from './reciples';
import filter from './filter';
import category from './category';

const reducer = combineReducers({ reciples, filter, category });

export default reducer;
