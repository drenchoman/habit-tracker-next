export default function checkStreakContinues(yesterday, today, arr) {
  let dates = arr.filter((d) => d.date == yesterday);
  let todays = arr.filter((d) => d.date == today);

  if (todays.length > 0) {
    if (todays[0].status == true) {
      return true;
    }
    if (todays.length == 0) {
      return false;
    }
  }

  if (dates.length == 0) {
    return false;
  }
  if (dates[0].status == false) {
    return false;
  }

  return true;
}
