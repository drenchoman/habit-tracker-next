export default function getYesterdayDate() {
  let date = new Date();
  let d = String(date.getDate()).padStart(2, '0');
  let m = String(date.getMonth() + 1).padStart(2, '0');
  let y = date.getFullYear();
  let yesterday = `${d}${m}${y}`;

  return yesterday;
}
