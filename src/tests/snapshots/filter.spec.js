import renderer from 'react-test-renderer';

import Filter from '../../components/Filter';

describe('Filter', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Filter
          categories={[]}
          selectedCategory="Beef"
          onChangeFilter={() => {}}
          error=""
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
