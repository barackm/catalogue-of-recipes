import { LOAD_RECIPLES_SUCCESS } from '../actions';

const initialState = {
  list: [],
  loading: false,
};

const reciples = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPLES_SUCCESS:
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default reciples;
