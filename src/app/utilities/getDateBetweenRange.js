// Function can take in a date extracted from convertDate
export default function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());

  // exclude start date
  date.setDate(date.getDate() + 1);

  const dates = [];

  // exlcude end date
  while (date < endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return dates;
}
