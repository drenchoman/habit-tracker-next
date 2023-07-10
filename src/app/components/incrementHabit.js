'use client';
import getDate from '../utilities/getDate';
import { useAuthContext } from '../context/AuthContext';
import addHabitEntry from '../firebase/firestore/addHabitEntry';
import { useState } from 'react';

export default function IncrementHabit({ habit }) {
  const { user } = useAuthContext();
  const [count, setCount] = useState(0);

  const checkCount = (frequency) => {
    setCount((count) => count + 1);
    if (frequency == count) {
      return true;
    }
    return false;
  };

  const addDateEntryToHabit = async (habit) => {
    let addEntry = checkCount(habit.frequency);
    console.log(addEntry);
    console.log(count);
    // let { date, timestamp } = getDate();

    // let data = { status: true, notes: 'test', date, timestamp };

    // const { result, error } = await addHabitEntry(
    //   user.uid,
    //   habit.habitid,
    //   data
    // );

    // if (error) {
    //   return console.log(error);
    // }
    // console.log(result);
  };

  return (
    <div className="flex flex-col" key={habit.id}>
      <h3>{habit.name}</h3>
      <span>{habit.currentStreak}</span>
      <span>
        Frequency {count} / {habit.frequency}
      </span>
      <button
        className="rounded bg-blue-400"
        onClick={() => addDateEntryToHabit(habit)}
      >
        Again
      </button>
    </div>
  );
}
