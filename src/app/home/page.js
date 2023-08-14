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
import Spinner from '../components/spinner';
import sortArrayByTimestamp from '../utilities/sortArrayByTimestamp';

export default function Admin() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [habits, setHabits] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (user == null) {
      router.push('/');
    } else {
      getAllHabits();
      setLoading(false);
    }
  }, [user]);

  const getAllHabits = async () => {
    const { result, error } = await getHabits(user.uid);
    if (error) {
      return console.log('Something went wrong');
    }
    setHabits(sortArrayByTimestamp(result));
  };

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col max-w-2xl m-auto p-4">
        <Spinner />;
      </main>
    );
  }
  return (
    <main className="flex min-h-screen flex-col max-w-2xl m-auto p-4">
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
