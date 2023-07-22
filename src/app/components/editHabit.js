'use client';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import addHabit from '../firebase/firestore/addHabit';
import getDate from '../utilities/getDate';
import { useRouter } from 'next/navigation';
import getSingleHabit from '../firebase/firestore/getSingleHabit';

export default function EditHabit({ id }) {
  const { user } = useAuthContext();
  const router = useRouter();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [freq, setFreq] = useState(1);

  useEffect(() => {
    getHabitInfo();
  }, []);

  const getHabitInfo = async () => {
    const { result, error } = await getSingleHabit(user.uid, id);
    if (error) {
      console.log('An error occurred');
    }
    setName(result.name);
    setDesc(result.description);
    setFreq(result.frequency);
  };

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
        <label htmlFor="name">Habit Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className="text-black placeholder:black"
          name="name"
          id="name"
          value={name}
          type="text"
        />
      </div>
      <div className="flex flex-col my-2">
        <label htmlFor="desc">Description</label>
        <input
          onChange={(e) => setDesc(e.target.value)}
          className="text-black placeholder:black"
          name="desc"
          id="desc"
          value={desc}
          type="text"
        />
      </div>
      <div className="flex flex-col my-2">
        <label htmlFor="frequency">Frequency</label>
        <input
          onChange={(e) => setFreq(e.target.value)}
          placeholder="How many times a day you want to perform this habit?"
          className="text-black"
          name="frequency"
          value={freq}
          id="frequency"
          type="number"
        />
      </div>
      <div className="flex flex-col items-center my-2">
        <button className="bg-blue-400 hover:bg-blue-700 my-2 mx-4 py-2 px-4 rounded">
          Update
        </button>
      </div>
    </form>
  );
}
