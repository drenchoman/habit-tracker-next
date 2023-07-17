export default function checkStreakContinues(date, arr) {
  let dates = arr.filter((d) => d.date == date);
  if (dates.length == 0) {
    return false;
  }
  if (dates[0].status == false) {
    return false;
  }
  return true;
}
