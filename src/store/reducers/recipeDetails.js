import {
  API_CALL_START,
  LOAD_DETAILS_FAILURE,
  LOAD_DETAILS_SUCCESS,
} from '../actions';

const initialState = {
  details: {},
  loading: false,
  error: '',
};

const recipeDetails = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_START:
      return { ...state, loading: true, error: null };
    case LOAD_DETAILS_SUCCESS:
      // console.log(action.payload, 'debo');
      return {
        ...state,
        details: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_DETAILS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default recipeDetails;
