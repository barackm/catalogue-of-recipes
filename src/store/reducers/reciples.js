const initialState = {
  list: [],
  loading: false,
};

const reciples = (state = initialState, action) => {
  switch (action.type) {
    case 'RECIPS_LOADING':
      return state;
    default:
      return state;
  }
};

export default reciples;
