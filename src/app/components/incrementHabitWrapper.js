import IncrementHabit from './incrementHabit';

export default function IncrementHabitWrapper({ habits }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-center font-bold my-2">
        Go Again
      </h2>
      <div>
        {habits.map((habit) => (
          <IncrementHabit key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
}
