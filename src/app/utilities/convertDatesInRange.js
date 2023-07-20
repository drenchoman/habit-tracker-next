import convertDate from './convertDate';
import getDate from './getDate';
import getDatesInRange from './getDateBetweenRange';
import extractDate from './extractDate';

export default function convertDatesInRange(initialDate) {
  let startDate = convertDate(initialDate);
  let { date } = getDate();
  let endDate = convertDate(date);
  let range = getDatesInRange(startDate, endDate);
  let converted = range.map((r) => extractDate(r));
  return converted;
}
