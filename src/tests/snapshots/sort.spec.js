import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

import Sort from '../../components/Sort';

describe('Sort', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Sort onChangeSortColumn={() => {}} activeColumn="None" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with sort column', () => {
    render(<Sort onChangeSortColumn={() => {}} activeColumn="Area" />);
    const sortColumn = screen.getAllByText(/Area/i);
    const element = sortColumn[0];
    expect(element).toBeInTheDocument();
  });

  it('should throw an error if looking for an unknown sort column', () => {
    render(<Sort onChangeSortColumn={() => {}} activeColumn="Area" />);
    expect(() => screen.getAllByText(/manger/i)).toThrow();
  });
});
