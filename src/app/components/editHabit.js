'use client';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import updateHabit from '../firebase/firestore/updateHabit';
import getDate from '../utilities/getDate';
import { useRouter } from 'next/navigation';
import getSingleHabit from '../firebase/firestore/getSingleHabit';

export default function EditHabit({ id }) {
  const { user } = useAuthContext();
  const router = useRouter();
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [freq, setFreq] = useState(1);
  const [loading, setLoading] = useState(false);

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
    const data = {
      name: name,
      description: desc,
      frequency: freq,
    };

    const { result, error } = await updateHabit(user.uid, id, data);
    setLoading(false);
    if (error) {
      return console.log(error);
    }
    router.push('/home');
  };

  return loading ? (
    'loading'
  ) : (
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
          className="text-black placeholder:black"
          name="name"
          id="name"
          value={name}
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
          value={desc}
          type="text"
        />
      </div>
      <div className="flex flex-col my-2">
        <label className="my-1" htmlFor="frequency">
          Frequency
        </label>
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
        <button className="border-black bg-neoblue border-4 rounded-md shadow-shadz my-2 mx-4 py-2 px-4">
          Update
        </button>
      </div>
    </form>
  );
}
