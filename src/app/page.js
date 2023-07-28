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
      <h1 className="text-4xl py-2 text-center">Go Again</h1>
      <p className="my-2  text-center w-80">
        Your simple habit tracker. Add. Do. Go Again.
      </p>
      <div className="flex  flex-row items-center">
        <button className="border-black bg-neocard border-4 rounded-md shadow-shadz py-2 px-4 m-2">
          <Link href="/signin"> Sign in </Link>
        </button>

        <button className="border-black bg-neogreen border-4 rounded-md shadow-shadz py-2 px-4 m-2">
          <Link href="/signup">Register</Link>
        </button>
      </div>
    </main>
  );
}
