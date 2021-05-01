import { findMax, objectContainsProperty } from '../searching/search';

test('objectContainsProperty', () => {
  const testedObject = {
    id: 1,
    title: 'title',
    description: 'description',
  };

  expect(objectContainsProperty(testedObject, 'id')).toBe(true);
  expect(objectContainsProperty(testedObject, 'name')).toBe(false);
  expect(objectContainsProperty(testedObject, '')).toBe(false);
});

test('findMax', () => {
  const arrayToTest = [
    { id: 1, title: 'title 1', size: 100 },
    { id: 2, title: 'title 2', size: 34 },
    { id: 3, title: 'title 3', size: 211 },
    { id: 4, title: 'title 4', size: -33 },
  ];

  expect(findMax(arrayToTest, 'id')).toBe(4);
  expect(findMax(arrayToTest, 'size')).toBe(211);
  expect(findMax(arrayToTest, 'title')).toBeUndefined();
});
