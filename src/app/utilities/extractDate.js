export default function extractDate(date) {
  let d = String(date.getDate()).padStart(2, '0');
  let m = String(date.getMonth() + 1).padStart(2, '0');
  let y = date.getFullYear();
  let dateString = `${d}${m}${y}`;
  let timestamp = date.getTime();

  return { dateString, timestamp };
}
