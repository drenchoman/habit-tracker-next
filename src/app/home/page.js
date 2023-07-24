'use client';
import Link from 'next/link';
import Navbar from '../components/navbar';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Signout from '../components/signout';
import getHabits from '../firebase/firestore/getHabits';
import GetStarted from '../components/getStarted';
import IncrementHabitWrapper from '../components/incrementHabitWrapper';

export default function Admin() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [habits, setHabits] = React.useState([]);

  React.useEffect(() => {
    if (user == null) {
      router.push('/');
    } else {
      const getHab = async () => {
        const { result, error } = await getHabits(user.uid);
        if (error) {
          return console.log('errpr', error);
        }
        setHabits(result);
      };
      // may have to be await getHab?
      getHab();
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col max-w-2xl m-auto p-8">
      <Navbar />

      {habits.length == 0 ? (
        <GetStarted />
      ) : (
        <IncrementHabitWrapper habits={habits} />
      )}
      <Signout />
    </main>
  );
}
