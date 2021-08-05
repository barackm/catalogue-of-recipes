import paginate from '../../components/utils/paginate';

describe('paginate', () => {
  it('should return the correct page', () => {
    const page = paginate(['1', '2', '3', '4'], 1, 2);
    expect(page).toEqual(['1', '2']);
  });

  it('should return an empty array if items is not an array', () => {
    const page = paginate(1, 1, 2);
    expect(page).toEqual([]);
  });

  it('should throw an error if the first argument is missing', () => {
    expect(() => paginate(1, 3)).toThrow();
  });

  it('should throw an error if the second argument is missing', () => {
    expect(() => paginate(2, 5)).toThrow();
  });

  it('should throw an error if the third argument is missing', () => {
    expect(() => paginate(2, 5)).toThrow();
  });
});
