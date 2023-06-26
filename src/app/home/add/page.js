'use client';
import Link from 'next/link';
import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
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
        <form>
          <div>
            <label>Habit Name</label>
            <input type="text"></input>
          </div>
        </form>
      </div>

      <Signout />
    </main>
  );
}
