import { combineReducers } from 'redux';
import reciples from './reciples';
import filter from './filter';
import categories from './categories';

const reducer = combineReducers({ reciples, filter, categories });

export default reducer;
