import createStore from '../store/createStore';

const store = createStore();

describe('Store', () => {
  it('should be an object', () => {
    expect(store).toBeInstanceOf(Object);
  });

  it('should have a subscribe method', () => {
    expect(store).toHaveProperty('subscribe');
  });

  it('should have a dispatch method', () => {
    expect(store).toHaveProperty('dispatch');
  });

  it('should have a getState method', () => {
    expect(store).toHaveProperty('getState');
  });

  it('should throw an error if trying to dispatch an action withou the type', () => {
    expect(() => {
      store.dispatch({});
    }).toThrow();
  });
});
