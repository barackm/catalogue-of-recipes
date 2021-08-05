import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Pagination from '../../components/Pagination';

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

  it('should display the right page numbers', () => {
    render(
      <Pagination
        itemsCount={30}
        pageSize={6}
        currentPage={1}
        onPageChange={() => {}}
      />,
    );
    const pageOne = screen.getByText(/1/i);
    expect(pageOne).toBeInTheDocument();
  });

  it('should render the page 1 as active', () => {
    render(
      <Pagination
        itemsCount={30}
        pageSize={6}
        currentPage={1}
        onPageChange={() => {}}
      />,
    );
    const pageOne = screen.getByText(/1/i);
    expect(pageOne).toHaveClass('active');
  });

  it('should render the page 2 as active', () => {
    render(
      <Pagination
        itemsCount={30}
        pageSize={6}
        currentPage={2}
        onPageChange={() => {}}
      />,
    );
    const pageOne = screen.getByText(/2/i);
    expect(pageOne).toHaveClass('active');
  });

  it('should return empty string is the itemsCount is less', () => {
    render(
      <Pagination
        itemsCount={1}
        pageSize={6}
        currentPage={2}
        onPageChange={() => {}}
      />,
    );
    expect(() => screen.getByText(/2/i)).toThrow();
  });
});
