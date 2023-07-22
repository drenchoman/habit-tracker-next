'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import { useRouter, useParams } from 'next/navigation';
import React from 'react';
import EditHabit from '@/app/components/editHabit';

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
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center">
        <h2>Edit Habit</h2>
        <EditHabit id={id} />
      </div>
    </main>
  );
}
