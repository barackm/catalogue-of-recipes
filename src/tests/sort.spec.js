import renderer from 'react-test-renderer';

import Sort from '../components/Sort';

describe('Sort', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Sort
          onChangeSortColumn={() => {}}
          activeColumn="None"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
