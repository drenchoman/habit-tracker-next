'use client';
import React from 'react';
import { useAuthContext } from './context/AuthContext';
import { useRouter } from 'next/navigation';

import Link from 'next/link';
export default function Home() {
  const { user } = useAuthContext();

  const router = useRouter();

  // If logged in / push to admin page

  React.useEffect(() => {
    if (user) {
      router.push('/home');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-8">
      <h1 className="text-2xl py-2 text-center">Habit Tracker</h1>
      <p className="my-2 text-center w-80">
        We are what we repeatedly do. Excellence then, is not an act
        but a habit.
      </p>
      <div className="flex  flex-row items-center">
        <button className="bg-blue-400 hover:bg-blue-700 rounded py-2 px-4 m-2">
          <Link href="/signin"> Sign in </Link>
        </button>

        <button className="bg-red-400 hover:bg-red-700 rounded py-2 px-4 m-2">
          <Link href="/signup"> Register</Link>
        </button>
      </div>
    </main>
  );
}
