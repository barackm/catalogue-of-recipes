import {
  LOAD_CATEGORIES_FAILURE,
  LOAD_CATEGORIES_START,
  LOAD_CATEGORIES_SUCCESS,
} from '../actions';

const initialState = {
  list: [],
  loading: false,
  error: '',
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_CATEGORIES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default categories;
