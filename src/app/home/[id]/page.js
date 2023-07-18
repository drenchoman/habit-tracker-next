'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import getSingleHabit from '@/app/firebase/firestore/getSingleHabit';

export default function HabitPage() {
  const { user } = useAuthContext();
  const { id } = useParams();

  React.useEffect(() => {
    const getHabitData = async () => {
      let { result, error } = await getSingleHabit(user.uid, id);
      console.log(result, error);
    };
    getHabitData;
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center"></div>
    </main>
  );
}
