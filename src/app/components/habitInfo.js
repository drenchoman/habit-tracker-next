export default function HabitInfo({ data }) {
  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <h3>
        Current Streak <span>{data.currentStreak}</span>
      </h3>
      <p>Frequency: {data.frequency}</p>
    </div>
  );
}
