import IncrementHabit from './incrementHabit';

export default function IncrementHabitWrapper({ habits }) {
  return (
    <div className="flex flex-col ">
      <h3 className="text-l  my-2">Your Habits</h3>

      <div>
        {habits.map((habit) => (
          <IncrementHabit key={habit.id} habit={habit} />
        ))}
      </div>
    </div>
  );
}
