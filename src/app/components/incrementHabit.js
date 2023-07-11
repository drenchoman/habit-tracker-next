'use client';
import getDate from '../utilities/getDate';
import { useAuthContext } from '../context/AuthContext';
import addHabitEntry from '../firebase/firestore/addHabitEntry';
import { useState, useEffect } from 'react';

// Todo: If freq = count, send off to DB, otherwise return

export default function IncrementHabit({ habit }) {
  const { user } = useAuthContext();
  const [count, setCount] = useState(0);

  useEffect(() => {
    let check = checkCount(habit.frequency);
    if (check) {
      addDateEntryToHabit(habit);
    }
  }, [count]);

  const checkCount = (frequency) => {
    if (count == frequency) {
      return true;
    }
    return false;
  };

  const updateCount = () => {
    setCount((count) => count + 1);
  };

  const addDateEntryToHabit = async (habit) => {
    let { date, timestamp } = getDate();

    let data = { status: true, notes: 'test', date, timestamp };

    const { result, error } = await addHabitEntry(
      user.uid,
      habit.id,
      data
    );

    if (error) {
      return console.log(error);
    }
    console.log(result);
  };

  return (
    <div className="flex flex-col" key={habit.id}>
      <h3>{habit.name}</h3>
      <span>{habit.currentStreak}</span>
      <span>
        Frequency {count} / {habit.frequency}
      </span>
      {count == habit.frequency ? (
        <button
          disabled
          className="rounded bg-blue-400"
          onClick={() => updateCount()}
        >
          Again
        </button>
      ) : (
        <button
          className="rounded bg-blue-400"
          onClick={() => updateCount()}
        >
          Again
        </button>
      )}
    </div>
  );
}
