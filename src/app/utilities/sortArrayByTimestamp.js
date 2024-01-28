// Sorts array by timestamp

export default function sortArrayByTimestamp(arr) {
  let a = arr.sort((x, y) => {
    return x.timestamp - y.timestamp;
  });
  return a;
}
