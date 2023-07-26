'use client';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import addHabit from '../firebase/firestore/addHabit';
import getDate from '../utilities/getDate';
import { useRouter } from 'next/navigation';

export default function AddHabit() {
  const { user } = useAuthContext();
  const router = useRouter();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [freq, setFreq] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let { date, timestamp } = getDate();
    const data = {
      name: name,
      description: desc,
      frequency: freq,
      currentStreak: 0,
      date,
      timestamp,
    };

    const { result, error } = await addHabit(user.uid, data);
    if (error) {
      return console.log(error);
    }
    router.push('/home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col my-2">
        <label className="my-1" htmlFor="name">
          Habit Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="text-black placeholder:black"
          name="name"
          id="name"
          type="text"
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="my-1" htmlFor="desc">
          Description
        </label>
        <input
          onChange={(e) => setDesc(e.target.value)}
          className="text-black placeholder:black"
          name="desc"
          id="desc"
          type="text"
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="my-1" htmlFor="frequency">
          Frequency
        </label>
        <input
          onChange={(e) => setFreq(e.target.value)}
          placeholder="How many times per day?"
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
  );
}
