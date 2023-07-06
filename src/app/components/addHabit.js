'use client';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import addHabit from '../firebase/firestore/addHabit';

export default function AddHabit() {
  const { user } = useAuthContext();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [freq, setFreq] = useState(1);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      description: desc,
      frequency: freq,
      currentStreak: 0,
    };

    const { result, error } = await addHabit(user.uid, data);
    if (error) {
      return console.log(error);
    }
    console.log(result);
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
