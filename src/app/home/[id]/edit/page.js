'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '@/app/components/navbar';
import React from 'react';
import EditHabit from '@/app/components/editHabit';
import GoBack from '@/app/components/goback';

export default function Edit() {
  const { id } = useParams();
  const { user } = useAuthContext();
  React.useEffect(() => {
    if (user == null) {
      router.push('/');
    } else {
      // user is logged in
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col p-8">
      <Navbar />
      <div className="flex flex-col items-center">
        <h2>Edit Habit</h2>
        <EditHabit id={id} />
        <GoBack />
      </div>
    </main>
  );
}
