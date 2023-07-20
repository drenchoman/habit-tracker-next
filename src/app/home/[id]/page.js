'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import React from 'react';
import convertDate from '@/app/utilities/convertDate';
import extractDate from '@/app/utilities/extractDate';
import getDate from '@/app/utilities/getDate';
import { useRouter, useParams } from 'next/navigation';
import getSingleHabit from '@/app/firebase/firestore/getSingleHabit';
import getDatesFromHabits from '@/app/firebase/firestore/getDatesFromHabits';
import getDatesInRange from '@/app/utilities/getDateBetweenRange';

export default function HabitPage() {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [dates, setDates] = React.useState([]);
  const [data, setData] = React.useState({});
  console.log(data, dates);

  React.useEffect(() => {
    const getHabitData = async () => {
      let { result, error } = await getSingleHabit(user.uid, id);
      if (error) {
        return console.log('error', error);
      }
      setData(result);
    };
    getHabitData();
  }, []);

  React.useEffect(() => {
    const getDates = async () => {
      let { result, error } = await getDatesFromHabits(user.uid, id);
      if (error) {
        return console.log(error);
      }
      setDates(result);
      let startDate = convertDate(result[0].date);
      let { date } = getDate();
      let endDate = convertDate(date);
      let range = getDatesInRange(startDate, endDate);
      let converted = range.map((r) => extractDate(r));
      console.log(converted);

      let datesToCompare = result.map((r) => r.date);
      console.log(datesToCompare);

      function filterUniqueValues(arr1, arr2) {
        let intersection = arr1.filter((e) => !arr2.includes(e));
        return intersection;
      }
      console.log(filterUniqueValues(converted, datesToCompare));

      // let filtered = result.filter(
      //   (arr, i) => !arr.some((ar) => ar.date == converted.dateString)
      // );
      // console.log(filtered);
    };
    getDates();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center"></div>
    </main>
  );
}
