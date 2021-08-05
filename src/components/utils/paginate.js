import _ from 'lodash';

const paginate = (items, pageNumber, pageSize) => {
  if (!items || !pageNumber || !pageSize) throw new Error('Missing arguments');
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

export default paginate;
