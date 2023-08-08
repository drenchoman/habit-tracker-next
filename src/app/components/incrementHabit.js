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
import IncrementCard from './incrementCard';
import Link from 'next/link';
import { PiFireBold } from 'react-icons/pi';

export default function IncrementHabit({ habit }) {
  const { user } = useAuthContext();
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [streak, setStreak] = useState(habit.currentStreak);

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

  // Check streak should continue
  const checkStreak = async (result) => {
    let yesterday = getYesterdayDate();
    let { date, timestamp } = getDate();
    let continues = checkStreakContinues(yesterday, date, result);
    if (continues == false) {
      await updateHabit(user.uid, habit.id, {
        currentStreak: 0,
      });
    }
  };

  const updateCount = () => {
    setCount((count) => count + 1);
  };

  // Add date to DB for streak and habit

  const addDateEntryToHabit = async (habit) => {
    let { date, timestamp } = getDate();

    let data = { status: true, notes: 'test', date, timestamp };

    // Update current streak
    await updateHabit(user.uid, habit.id, {
      currentStreak: habit.currentStreak + 1,
    });

    // update highest streak
    let topstreak = habit.currentStreak + 1;

    if (topstreak > habit.highestStreak) {
      await updateHabit(user.uid, habit.id, {
        highestStreak: topstreak,
      });
    }

    const { result, error } = await addHabitEntry(
      user.uid,
      habit.id,
      data
    );

    if (error) {
      return console.log(error);
    }
    setStreak((streak) => streak + 1);
  };

  return (
    <div
      className="flex flex-col my-4 border-4 border-black rounded-md bg-neocard  shadow-shadz"
      key={habit.id}
    >
      <Link passHref href={`/home/${habit.id}`}>
        <div className="flex flex-row justify-between  my-1 p-2">
          <h3 className="text-xl font-bold mr-8px">{habit.name}</h3>
          <div className="flex justify-center items-center">
            <PiFireBold size={24} />
            <span className="text-l mx-1"> {streak}</span>
          </div>
        </div>
      </Link>
      <IncrementCard
        completed={completed}
        count={count}
        habit={habit}
        updateCount={updateCount}
      />
    </div>
  );
}
