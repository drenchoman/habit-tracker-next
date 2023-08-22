'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import React from 'react';
import convertDatesInRange from '@/app/utilities/convertDatesInRange';
import Navbar from '@/app/components/navbar';
import { useRouter, useParams } from 'next/navigation';
import getSingleHabit from '@/app/firebase/firestore/getSingleHabit';
import getDatesFromHabits from '@/app/firebase/firestore/getDatesFromHabits';
import filterUniqueValues from '@/app/utilities/filterUniqueDates';
import addHabitEntry from '@/app/firebase/firestore/addHabitEntry';
import getDate from '@/app/utilities/getDate';
import splitArrayIntoGroups from '@/app/utilities/splitArrayIntoGroups';
import GoAgainWrapper from '@/app/components/goAgainWrapper';
import HabitInfo from '@/app/components/habitInfo';
import sortArrayByTimestamp from '@/app/utilities/sortArrayByTimestamp';
import Spinner from '@/app/components/spinner';
import getTimestamp from '@/app/utilities/getTimestamp';

export default function HabitPage() {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [dates, setDates] = React.useState([]);
  const [data, setData] = React.useState({});
  const [updated, setUpdated] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [info, setInfo] = React.useState('');

  React.useEffect(() => {
    if (user == null) {
      router.push('/');
    }
  }, [user]);

  React.useEffect(() => {
    getHabitData();
  }, []);

  React.useEffect(() => {
    getDates();
  }, [updated]);

  const getHabitData = async () => {
    let { result, error } = await getSingleHabit(user.uid, id);
    if (error) {
      return console.log('error');
    }
    setData(result);
  };

  const getDates = async () => {
    let { result, error } = await getDatesFromHabits(user.uid, id);
    if (error) {
      console.log('Something went wrong');
      return;
    }
    if (result.length == 0) {
      setInfo('Your progress will appear here.');
      setLoading(false);
      return;
    }

    let group = splitArrayIntoGroups(sortArrayByTimestamp(result), 7);
    setDates(group);

    let converted = convertDatesInRange(result[0].date);

    let datesToCompare = result.map((r) => r.date);

    let intersection = filterUniqueValues(converted, datesToCompare);

    if (intersection.length >= 1) {
      await intersection.forEach((date) =>
        addDateEntryToHabit(id, date)
      );
      setUpdated(true);
    }
    setLoading(false);
    // else no new dates to add
    return;
  };

  // timestamp == actual date
  const addDateEntryToHabit = async (id, date) => {
    let timestamp = getTimestamp(date);

    let data = {
      status: false,
      notes: 'Missed',
      date,
      timestamp,
    };

    const { result, error } = await addHabitEntry(user.uid, id, data);

    if (error) {
      return console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen justify-between flex-col max-w-2xl m-auto  p-4">
      <Navbar />
      {info.length > 0 ? (
        <div className=" flex flex-col justify-center text-center border-4 p-2 bg-neoyellow border-black rounded-md shadow-shadz">
          <p>{info}</p>
        </div>
      ) : (
        ''
      )}
      {loading ? <Spinner /> : ''}

      <GoAgainWrapper dates={dates} />

      <HabitInfo
        data={data}
        id={id}
        weeks={dates.length}
        dates={dates}
      />
    </main>
  );
}
