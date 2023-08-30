// Convert my date to timestamp eg: 21092023 to 1695261722
export default function getTimestamp(date) {
  let string = date.toString();
  let y = string.slice(4);
  let m = string.slice(2, 4);
  let d = string.slice(0, 2);

  let datum = new Date(Date.UTC(y, Number(m - 1), d, 2, 2, 2, 2));
  return datum.getTime() / 1000;
}
