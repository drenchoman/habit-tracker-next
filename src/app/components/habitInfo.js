'use client';
import { FiEdit } from 'react-icons/fi';
import Link from 'next/link';
import { PiFireBold } from 'react-icons/Pi';

export default function HabitInfo({ data, id, weeks, dates }) {
  const totalDays = dates
    .map((d) => d.length)
    .reduce((a, b) => a + b, 0);

  const daysAchieved = dates
    .map((d) =>
      d.map((x) => x.status == true).filter((y) => y == true)
    )
    .map((x) => x.length)
    .reduce((a, b) => a + b, 0);
  // let te = t.map((x) => x.length).reduce((a, b) => a + b, 0);
  const daysmissed = totalDays - daysAchieved;

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-row absolute right-0 top-2">
        <Link href={`/home/${id}/edit`}>
          <FiEdit />
        </Link>
      </div>
      <h2 className="text-2xl font-bold my-1">{data.name}</h2>
      <div className="flex justify-between">
        <p>{data.description}</p>
        <div className="flex justify-center items-center">
          <PiFireBold size={24} />
          <span className="text-1xl mx-1"> {data.currentStreak}</span>
        </div>
      </div>
      <hr className="my-2"></hr>

      <div className="flex justify-between">
        <p>Weeks: {weeks}</p>
        <p>Days: {totalDays}</p>
        <p>Achieved: {daysAchieved}</p>
        <p>Missed: {daysmissed}</p>
      </div>
    </div>
  );
}
