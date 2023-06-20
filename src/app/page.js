'use client';
import React from 'react';
import { useAuthContext } from './context/AuthContext';
import { useRouter } from 'next/navigation';

import SignIn from './components/signin';
import Signup from './components/signup';
export default function Home() {
  const { user } = useAuthContext();

  const router = useRouter();

  // If logged in / push to admin page

  React.useEffect(() => {
    if (user) {
      router.push('/admin');
    }
  });

  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <SignIn />
      <Signup />
    </main>
  );
}
