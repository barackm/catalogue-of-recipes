import {
  LOAD_CATEGORIES_FAILURE,
  LOAD_CATEGORIES_START,
  LOAD_CATEGORIES_SUCCESS,
} from '../../store/actions';
import createStore from '../../store/createStore';

const store = createStore();

describe('categoriesReducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().categories).toEqual({
      list: [],
      loading: false,
      error: '',
    });
  });

  it('should handle LOAD_CATEGORIES_START', () => {
    store.dispatch({ type: LOAD_CATEGORIES_START });
    expect(store.getState().categories.loading).toBe(true);
  });

  it('should handle LOAD_CATEGORIES_SUCCESS', () => {
    store.dispatch({
      type: LOAD_CATEGORIES_SUCCESS,
      payload: [{ id: 1, name: 'category 1' }],
    });
    expect(store.getState().categories.list).toEqual([
      { id: 1, name: 'category 1' },
    ]);
    expect(store.getState().categories.loading).toBe(false);
  });

  it('should handle LOAD_CATEGORIES_FAILURE', () => {
    store.dispatch({
      type: LOAD_CATEGORIES_FAILURE,
      payload: 'error',
    });
    expect(store.getState().categories.error).toBe('error');
    expect(store.getState().categories.loading).toBe(false);
  });

  it('should handle unknown action type', () => {
    store.dispatch({ type: 'unknown' });
    expect(store.getState().categories.loading).toBe(false);
  });

  it('should throw an error if requesting for an unexisting reducer', () => {
    expect(() => {
      store.dispatch();
    }).toThrow();
  });
});
