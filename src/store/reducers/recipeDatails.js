import {
  API_CALL_START,
  LOAD_DETAILS_FAILURE,
  LOAD_DETAILS_SUCCESS,
} from '../actions';

const initialState = {
  list: [],
  loading: false,
  error: '',
};

const recipeDatails = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_START:
      return { ...state, loading: true, error: null };
    case LOAD_DETAILS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_DETAILS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default recipeDatails;
