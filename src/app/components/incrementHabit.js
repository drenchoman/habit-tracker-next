'use client';
import getDate from '../utilities/getDate';
import { useAuthContext } from '../context/AuthContext';
import addHabitEntry from '../firebase/firestore/addHabitEntry';
import updateHabit from '../firebase/firestore/updateHabit';
import getDatesFromHabits from '../firebase/firestore/getDatesFromHabits';
import getYesterdayDate from '../utilities/getYesterdayDate';
import checkForToday from '../utilities/checkToday';
import { useState, useEffect } from 'react';
import checkStreakContinues from '../utilities/checkStreakContinues';

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
      setCompleted(checkForToday(result));
      checkStreak(result);
    };

    getDates();
  }, [user]);

  // Update count

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

  // IF false update habit - set current streak to 0 if True do nothing
  const checkStreak = (result) => {
    let yesterday = getYesterdayDate();
    checkStreakContinues(yesterday, result);
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
