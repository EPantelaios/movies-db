export const sortItems = (items, field) => {
  return items.sort((a, b) => {
    if (typeof a[field] === 'string' && typeof b[field] === 'string') {
      return a[field].localeCompare(b[field]);
    } else {
      return a[field] - b[field];
    }
  });
};
