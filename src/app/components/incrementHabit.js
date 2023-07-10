'use client';
import getDate from '../utilities/getDate';
import { useAuthContext } from '../context/AuthContext';
import addHabitEntry from '../firebase/firestore/addHabitEntry';

export default function IncrementHabit({ habits }) {
  const { user } = useAuthContext();

  const addDateEntryToHabit = async (habitid) => {
    let { date, timestamp } = getDate();

    let data = { status: true, notes: 'test', date, timestamp };

    const { result, error } = await addHabitEntry(
      user.uid,
      habitid,
      data
    );

    if (error) {
      return console.log(error);
    }
    console.log(result);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-center font-bold my-2">
        Go Again
      </h2>
      <div>
        {habits.map((habit, i) => (
          <div key={habit.id}>
            <h3>{habit.name}</h3>
            <span>{habit.currentStreak}</span>
            <button onClick={() => addDateEntryToHabit(habit.id)}>
              Again
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
