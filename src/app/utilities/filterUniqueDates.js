// Compare two arrays and finds the unique values/dates that do not appear in eitehr
export default function filterUniqueValues(arr1, arr2) {
  let intersection = arr1.filter((e) => !arr2.includes(e));
  return intersection;
}
