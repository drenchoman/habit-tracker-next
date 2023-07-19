'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import getSingleHabit from '@/app/firebase/firestore/getSingleHabit';
import getDatesFromHabits from '@/app/firebase/firestore/getDatesFromHabits';

export default function HabitPage() {
  const { user } = useAuthContext();
  const { id } = useParams();
  const [dates, setDates] = React.useState([]);

  React.useEffect(() => {
    const getHabitData = async () => {
      let { result, error } = await getSingleHabit(user.uid, id);
      if (error) {
        return console.log('error', error);
      }
      console.log(result);
    };
    getHabitData();
  }, []);

  React.useEffect(() => {
    const getDates = async () => {
      let { result, error } = await getDatesFromHabits(user.uid, id);
      if (error) {
        return console.log(error);
      }
      console.log(result);
    };
    getDates();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center"></div>
    </main>
  );
}
