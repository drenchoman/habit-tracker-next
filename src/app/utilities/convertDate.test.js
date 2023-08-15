import convertDate from './convertDate';

test('Converts format of date to a date seperated by a hyphen', () => {
  let string = 10092023;
  const result = convertDate(string);

  expect(result).toBe('10-09-2023');
});
