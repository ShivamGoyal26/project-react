const categories = [
  { id: 1, name: 'Electronics', parentId: 0 },
  { id: 2, name: 'Laptops', parentId: 1 },
  { id: 3, name: 'Phones', parentId: 1 },
  { id: 4, name: 'Smartphones', parentId: 3 },
];

console.log(
  categories.reduce((acc, category) => {
    if (category.parentId === 0) {
      acc[category['name']] = {};
    }
    return acc;
  }, {}),
);
