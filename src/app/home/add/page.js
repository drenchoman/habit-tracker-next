'use client';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import AddHabit from '@/app/components/addHabit';
import Signout from '../../components/signout';

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
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center">
        <h2>New Habit</h2>
        <AddHabit />
      </div>

      <Signout />
    </main>
  );
}
