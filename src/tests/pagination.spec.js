import renderer from 'react-test-renderer';

import Pagination from '../components/Pagination';

describe('Pagination', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Pagination
          itemsCount={30}
          pageSize={6}
          currentPage={1}
          onPageChange={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
