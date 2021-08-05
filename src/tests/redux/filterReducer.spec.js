import { CHANGE_FILTER } from '../../store/actions';
import createStore from '../../store/createStore';

const store = createStore();

describe('filterReducer', () => {
  it('should return the initial state', () => {
    expect(store.getState().filter).toBe('All');
  });

  it('should handle CHANGE_FILTER', () => {
    store.dispatch({ type: CHANGE_FILTER, payload: 'Beef' });
    expect(store.getState().filter).toBe('Beef');
  });

  it('should throw an error if requesting for an unexisting reducer', () => {
    expect(() => {
      store.dispatch();
    }).toThrow();
  });
});
