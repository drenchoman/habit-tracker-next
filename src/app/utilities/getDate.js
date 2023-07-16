// Used to get Todays date
export default function getDate() {
  let today = new Date();
  let d = String(today.getDate()).padStart(2, '0');
  let m = String(today.getMonth() + 1).padStart(2, '0');
  let y = today.getFullYear();
  let date = `${d}${m}${y}`;
  let timestamp = today.getTime();

  return { date, timestamp };
}
