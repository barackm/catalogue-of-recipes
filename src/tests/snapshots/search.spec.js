import renderer from 'react-test-renderer';

import Search from '../../components/Search';

describe('Search', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Search
          query="Beef"
          onChange={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
