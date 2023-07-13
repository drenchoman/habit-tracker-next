// function getDatesInRange(startDate, endDate) {
//   const date = new Date(startDate.getTime());

//   const dates = [];

//   while (date <= endDate) {
//     dates.push(new Date(date));
//     date.setDate(date.getDate() + 1);
//   }

//   return dates;
// }

// const d1 = new Date('2022-01-18');
// const d2 = new Date('2022-01-24');

// console.log(getDatesInRange(d1, d2));

export default function getDatesInRange(startDate, endDate) {
  const date = newDate(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
}
