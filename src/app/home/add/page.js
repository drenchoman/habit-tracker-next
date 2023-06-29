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
        <h2>New Habit</h2>
        <form>
          <div className="flex flex-col my-2">
            <label htmlFor="name">Habit Name</label>
            <input
              className="text-black placeholder:black"
              name="name"
              id="name"
              type="text"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="desc">Description</label>
            <input
              className="text-black placeholder:black"
              name="desc"
              id="desc"
              type="text"
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="frequency">Frequency</label>
            <input
              placeholder="How many times a day you want to perform this habit?"
              className="text-black"
              name="frequency"
              id="frequency"
              type="number"
            />
          </div>
          <div className="flex flex-col items-center my-2">
            <button className="bg-blue-400 hover:bg-blue-700 my-2 mx-4 py-2 px-4 rounded">
              Add
            </button>
          </div>
        </form>
      </div>

      <Signout />
    </main>
  );
}
