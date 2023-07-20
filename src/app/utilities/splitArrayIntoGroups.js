// Split array in group size determined by groupSize.

export default function splitArrayIntoGroups(array, groupSize) {
  const result = [];
  const arrayLength = array.arrayLength;

  for (let i = 0; i < arrayLength; i += groupSize) {
    result.push(array.slice(i, i + groupSize));
  }
  return result;
}
