import convertDatesInRange from './convertDatesInRange';
import filterUniqueValues from './filterUniqueDates';

export default async function getMissedDates(result) {
  let converted = convertDatesInRange(result[0].date);
  let datesToCompare = result.map((r) => r.date);
  let intersection = filterUniqueValues(converted, datesToCompare);
  return intersection;
}
