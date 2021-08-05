import {
  API_CALL_START,
  LOAD_RECIPES_FAILURE,
  LOAD_RECIPES_SUCCESS,
} from '../../store/actions';
import createStore from '../../store/createStore';

const store = createStore();

describe('recipes reducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().recipes).toEqual({
      error: '',
      list: [],
      loading: false,
    });
  });

  it('should handle API_CALL_START', () => {
    store.dispatch({ type: API_CALL_START });
    expect(store.getState().recipes.loading).toBe(true);
  });

  it('should handle LOAD_RECIPES_SUCCESS', () => {
    store.dispatch({
      type: LOAD_RECIPES_SUCCESS,
      payload: [
        {
          id: 1,
          title: 'Test Recipe 1',
          ingredients: [
            {
              id: 1,
              name: 'Test Ingredient 1',
            },
          ],
        },
      ],
    });
    expect(store.getState().recipes.list.length).toBe(1);
  });

  it('should handle LOAD_RECIPES_FAILURE', () => {
    store.dispatch({
      type: LOAD_RECIPES_FAILURE,
      payload: 'Error',
    });
    expect(store.getState().recipes.error).toBe('Error');
  });

  it('should handle unknown action type', () => {
    store.dispatch({ type: 'UNKNOWN_ACTION' });
    expect(store.getState().recipes.error).toBe('Error');
  });

  it('should throw an error if requesting for an unexisting reducer', () => {
    expect(() => {
      store.dispatch();
    }).toThrow();
  });
});
