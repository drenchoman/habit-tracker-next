import getDate from './getDate';

// Check if there is a completed entry for today

export default function checkForToday(arr) {
  let { date } = getDate();
  let dates = arr.filter((d) => d.date == date);
  if (dates.length == 0) {
    return false;
  }
  if (dates[0].status == true) {
    return true;
  }
}
