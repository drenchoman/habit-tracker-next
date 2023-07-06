'use client';
import Link from 'next/link';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Signout from '../components/signout';
import getHabits from '../firebase/firestore/getHabits';
export default function Admin() {
  const { user } = useAuthContext();
  const router = useRouter();

  const getHab = async () => {
    const { result, error } = await getHabits('users', user.uid);
    if (error) {
      return console.log(error);
    }
    console.log('test', result);
  };

  React.useEffect(() => {
    if (user == null) {
      router.push('/');
    } else {
      getHab();
      console.log(user.uid);
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl text-center font-bold my-2">
          Getting started is easy
        </h2>
        <p className="m-2">Tap below to add your first habit</p>
        <button className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 m-2 rounded">
          <Link href="/home/add">Add +</Link>
        </button>
      </div>

      <Signout />
    </main>
  );
}
