'use client';
import checkCollectionExists from '../firebase/firestore/checkCollectionExists';
import getDate from '../utilities/getDate';
import { useAuthContext } from '../context/AuthContext';

export default function IncrementHabit({ habits }) {
  const { user } = useAuthContext();

  const addDateEntryToHabit = async (habitid) => {
    let today = getDate();

    let data = { [today]: false };
    // let test = { 862023: false };
    // check if collection id for dates exists and adds data
    const { result, error } = await checkCollectionExists(
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
