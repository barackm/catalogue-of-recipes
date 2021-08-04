import { CHANGE_FILTER } from '../actions';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filter;
