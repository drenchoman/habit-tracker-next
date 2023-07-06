'use client';
export default function IncrementHabit({ habits }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-center font-bold my-2">
        Go Again
      </h2>
      <div>
        {habits.map((habit, i) => (
          <div key={i}>
            <h3>{habit.name}</h3>
            <span>{habit.currentStreak}</span>
            <button>Again</button>
          </div>
        ))}
      </div>
    </div>
  );
}
