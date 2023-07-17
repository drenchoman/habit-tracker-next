'use client';
import getDate from '../utilities/getDate';
import { useAuthContext } from '../context/AuthContext';
import addHabitEntry from '../firebase/firestore/addHabitEntry';
import updateHabit from '../firebase/firestore/updateHabit';
import getDatesFromHabits from '../firebase/firestore/getDatesFromHabits';
import { useState, useEffect } from 'react';

export default function IncrementHabit({ habit }) {
  const { user } = useAuthContext();
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Get dates per habit
  useEffect(() => {
    const getDates = async () => {
      const { result, error } = await getDatesFromHabits(
        user.uid,
        habit.id
      );
      if (error) {
        console.log(error);
      }
      checkForToday(result);
    };
    getDates();
  }, [user]);

  // Check if there is a completed entry for today

  const checkForToday = (arr) => {
    let { date } = getDate();
    console.log(date);
    let test = arr.filter((d) => d.date == date);
    if (test.length == 0) {
      console.log('no date found');
      return;
    }
    if (test[0].status == true) {
      setCompleted(true);
    }
  };

  useEffect(() => {
    let check = checkCount(habit.frequency);
    if (check) {
      addDateEntryToHabit(habit);
    }
  }, [count]);

  const checkCount = (frequency) => {
    if (count == frequency) {
      setCompleted(true);
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

    await updateHabit(user.uid, habit.id, {
      currentStreak: habit.currentStreak + 1,
    });

    // const { result, error } = await addHabitEntry(
    //   user.uid,
    //   habit.id,
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
      {completed ? (
        <button
          disabled
          className="rounded bg-green-400"
          onClick={() => updateCount()}
        >
          NICE!
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
