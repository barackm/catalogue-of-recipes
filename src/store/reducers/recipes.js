import {
  API_CALL_START,
  LOAD_RECIPES_FAILURE,
  LOAD_RECIPES_SUCCESS,
} from '../actions';

const initialState = {
  list: [],
  loading: false,
  error: '',
};

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_START:
      return { ...state, loading: true, error: null };
    case LOAD_RECIPES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_RECIPES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default recipes;
