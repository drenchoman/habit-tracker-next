'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import React from 'react';
import convertDatesInRange from '@/app/utilities/convertDatesInRange';
import { useRouter, useParams } from 'next/navigation';
import getSingleHabit from '@/app/firebase/firestore/getSingleHabit';
import getDatesFromHabits from '@/app/firebase/firestore/getDatesFromHabits';
import filterUniqueValues from '@/app/utilities/filterUniqueDates';

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

      let converted = convertDatesInRange(result[0].date);

      let datesToCompare = result.map((r) => r.date);

      let intersection = filterUniqueValues(
        converted,
        datesToCompare
      );
      console.log(intersection);
    };
    getDates();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center"></div>
    </main>
  );
}
