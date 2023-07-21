'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import React from 'react';
import convertDatesInRange from '@/app/utilities/convertDatesInRange';
import { useRouter, useParams } from 'next/navigation';
import getSingleHabit from '@/app/firebase/firestore/getSingleHabit';
import getDatesFromHabits from '@/app/firebase/firestore/getDatesFromHabits';
import filterUniqueValues from '@/app/utilities/filterUniqueDates';
import addHabitEntry from '@/app/firebase/firestore/addHabitEntry';
import getDate from '@/app/utilities/getDate';
import splitArrayIntoGroups from '@/app/utilities/splitArrayIntoGroups';
import GoAgainWrapper from '@/app/components/goAgainWrapper';

export default function HabitPage() {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [dates, setDates] = React.useState([]);
  const [data, setData] = React.useState({});

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

      let group = splitArrayIntoGroups(result, 7);
      setDates(group);

      let converted = convertDatesInRange(result[0].date);

      let datesToCompare = result.map((r) => r.date);

      let intersection = filterUniqueValues(
        converted,
        datesToCompare
      );
      if (intersection.length >= 1) {
        intersection.forEach((date) => addDateEntryToHabit(id, date));
      }
      // else no new dates to add
      return;
    };
    getDates();
  }, []);

  const addDateEntryToHabit = async (id, date) => {
    let { timestamp } = getDate();

    let data = {
      status: false,
      notes: 'auto-added',
      date,
      timestamp,
    };

    const { result, error } = await addHabitEntry(user.uid, id, data);

    if (error) {
      return console.log(error);
    }
    // console.log(result);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <GoAgainWrapper dates={dates} />
    </main>
  );
}
