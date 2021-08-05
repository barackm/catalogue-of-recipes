import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import createStore from '../../store/createStore';

import Home from '../../containers/Home';

const store = createStore();

describe('Home', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Provider store={store}>
            <Home />
          </Provider>
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should renders recipes link', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    const linkElement = screen.getByText(/recipes/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should not render an unknown link', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(() => screen.getByText(/happy/i)).toThrow();
  });

  it('should throw an error if looking for an unexisting element', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(() => screen.getByText(/food/i)).toThrow();
  });

  it('should not render an unknown link', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(() => screen.getByText(/happy/i)).toThrow();
  });
});
