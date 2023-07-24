'use client';
import { FiEdit } from 'react-icons/fi';
import Link from 'next/link';

export default function HabitInfo({ data, id }) {
  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row absolute right-0 top-1">
        <Link href={`/home/${id}/edit`}>
          <FiEdit />
        </Link>
      </div>
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p>{data.description}</p>
      <h3>
        Current Streak <span>{data.currentStreak}</span>
      </h3>
      <p>Frequency: {data.frequency}</p>
    </div>
  );
}
