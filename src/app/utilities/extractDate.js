export default function GetDate(date) {
  let string = date.toString();
  let y = string.slice(4);
  let m = string.slice(2, 4);
  let d = string.slice(0, 2);
  let arr = [y, m, d];

  let extract = arr.join('-');
  return extract;
}
