'use client';
import Link from 'next/link';
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
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (user == null) {
      router.push('/');
    } else {
      const getHab = async () => {
        const { result, error } = await getHabits(user.uid);
        if (error) {
          return console.log(error);
        }
        setHabits(result);
        setLoading(false);
      };
      // may have to be await getHab?
      getHab();
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {loading && <div>loading</div>}
      {habits.length == 0 ? (
        <GetStarted />
      ) : (
        <IncrementHabitWrapper habits={habits} />
      )}
      <Signout />
    </main>
  );
}
