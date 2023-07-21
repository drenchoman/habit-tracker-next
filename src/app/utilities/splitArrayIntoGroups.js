// Split array in group size determined by groupSize.

export default function splitArrayIntoGroups(array, groupSize) {
  const result = [];
  const letters = 'GOAGAIN';
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i += groupSize) {
    const group = array.slice(i, i + groupSize);
    group.forEach((obj, index) => {
      obj.letter = letters[index];
    });

    result.push(group);
  }
  return result;
}
