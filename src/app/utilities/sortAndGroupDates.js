import sortArrayByTimestamp from './sortArrayByTimestamp';
import splitArrayIntoGroups from './splitArrayIntoGroups';

export default function sortAndGroupDates(dates) {
  let sortedByTimeStamp = sortArrayByTimestamp(dates);

  let group = splitArrayIntoGroups(
    sortArrayByTimestamp(sortedByTimeStamp),
    7
  );
  return group;
}
