import { combineReducers } from 'redux';
import reciples from './reciples';
import filter from './filter';

const reducer = combineReducers({ reciples, filter });

export default reducer;
