// Split date to readable formate
export default function sliceDate(date) {
  let day = date.slice(0, 2);
  let month = date.slice(2, 4);
  let year = date.slice(4);
  return `${day} ${month} ${year}`;
}
