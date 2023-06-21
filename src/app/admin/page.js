'use client';
import Link from 'next/link';
import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import Signout from '../components/signout';
export default function Admin() {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    if (user == null) {
      router.push('/');
    } else {
      console.log(user);
    }
  }, [user]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Link
          className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded my-2 mx-2"
          href="/names"
        >
          Names
        </Link>
        <span>Hello</span>

        <Link
          className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded my-2 mx-2"
          href="/"
        >
          Back
        </Link>
      </div>
      <Signout />
    </main>
  );
}
