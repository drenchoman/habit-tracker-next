'use client';
import Navbar from '@/app/components/navbar';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import AddHabit from '@/app/components/addHabit';
import GoBack from '@/app/components/goback';

export default function Admin() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) {
      router.push('/');
    } else {
      // user is logged in
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col max-w-2xl m-auto p-4">
      <Navbar />

      <h3 className="text-l font-light my-2">Add Habit</h3>
      <AddHabit />
      <GoBack />
    </main>
  );
}
