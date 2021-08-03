import axios from 'axios';

export const endPoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
export const LOAD_RECIPLES_SUCCESS = 'LOAD_RECIPLES_SUCCESS';
export const LOAD_RECIPLES_FAILURE = 'LOAD_RECIPLES_FAILURE';
export const API_CALL_START = 'API_CALL_START';
export const CHANGE_FILTER = 'CHANGE_FILTER';

const loadRecipesSuccess = (data) => ({
  type: LOAD_RECIPLES_SUCCESS,
  payload: data,
});

const apiCallStart = () => ({
  type: API_CALL_START,
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const loadRecipesFailure = (error) => ({
  type: LOAD_RECIPLES_FAILURE,
  payload: error,
});

export const loadReciplesAsync = () => async (dispatch) => {
  dispatch(apiCallStart());
  try {
    const response = await axios.get(endPoint);
    dispatch(loadRecipesSuccess(response.data.meals));
  } catch (error) {
    dispatch(loadRecipesFailure(error.message));
  }
  axios.get(endPoint);
};
