export default function GetDate() {
  let today = new Date();
  let d = today.getDate();
  let m = today.getMonth();
  let y = today.getFullYear();
  let date = `${d}${m}${y}`;
  return date;
}
