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
      highestStreak: 0,
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
    <form
      className="border-4 p-2 bg-neocard border-black rounded-md shadow-shadz"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col my-2">
        <label className="my-1" htmlFor="name">
          Habit Name
        </label>
        <input
          onChange={(e) => setName(e.target.value)}
          required
          className="p-2 my-1 border-4 border-black rounded-md"
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
          required
          onChange={(e) => setDesc(e.target.value)}
          className="p-2 my-1 border-4 border-black rounded-md"
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
          required
          onChange={(e) => setFreq(e.target.value)}
          placeholder="How many times per day?"
          className="p-2 my-1 border-4 border-black rounded-md"
          name="frequency"
          id="frequency"
          type="number"
        />
      </div>
      <div className="flex flex-col items-center my-2">
        <button className="border-black bg-neoblue border-4 rounded-md shadow-shadz my-2 mx-4 py-2 px-4 ">
          Add
        </button>
      </div>
    </form>
  );
}
