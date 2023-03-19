import { sortItems } from '../utils/sortItems';

describe('sortItems', () => {
  const items = [
    { name: 'John', age: 25 },
    { name: 'Nick', age: 20 },
    { name: 'George', age: 30 },
  ];

  it('should sort items by string field', () => {
    const sortedItems = sortItems(items, 'name');
    expect(sortedItems).toEqual([
      { name: 'George', age: 30 },
      { name: 'John', age: 25 },
      { name: 'Nick', age: 20 },
    ]);
  });

  it('should sort items by numeric field', () => {
    const sortedItems = sortItems(items, 'age');
    expect(sortedItems).toEqual([
      { name: 'Nick', age: 20 },
      { name: 'John', age: 25 },
      { name: 'George', age: 30 },
    ]);
  });
});
