'use client';
import { FiEdit } from 'react-icons/fi';
import Link from 'next/link';

export default function HabitInfo({ data, id, weeks, dates }) {
  const totalDays = dates
    .map((d) => d.length)
    .reduce((a, b) => a + b, 0);

  const t = dates.map((d) => d.map((x) => x.status == true));
  console.log(t);

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row absolute right-0 top-2">
        <Link href={`/home/${id}/edit`}>
          <FiEdit />
        </Link>
      </div>
      <h2 className="text-2xl font-bold my-1">{data.name}</h2>
      <p>{data.description}</p>
      <h3>
        Current Streak: <span>{data.currentStreak}</span>
      </h3>
      <p>Total Weeks: {weeks}</p>
      <p>Total Days: {totalDays}</p>
      <p>Frequency: {data.frequency}</p>
    </div>
  );
}
