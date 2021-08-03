import {
  API_CALL_START,
  LOAD_RECIPLES_FAILURE,
  LOAD_RECIPLES_SUCCESS,
} from '../actions';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const reciples = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_START:
      return { ...state, loading: true, error: null };
    case LOAD_RECIPLES_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_RECIPLES_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default reciples;
