import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Footer from '../../components/Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
