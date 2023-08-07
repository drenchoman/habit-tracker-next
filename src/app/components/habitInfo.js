'use client';
import { FiEdit } from 'react-icons/fi';
import Link from 'next/link';
import { PiFireBold } from 'react-icons/pi';

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
  const daysmissed = totalDays - daysAchieved;

  return (
    <div className="flex flex-col relative border-4 p-2 bg-neocard  border-black rounded-md shadow-shadz">
      <div className="flex flex-row absolute right-2 top-4">
        <Link passHref href={`/home/${id}/edit`}>
          <FiEdit />
        </Link>
      </div>
      <h2 className="text-2xl font-bold my-1 mr-5">{data.name}</h2>
      <div className="flex justify-between my-1">
        <p>{data.description}</p>
        <div className="flex justify-center items-center">
          <PiFireBold size={24} />
          <span className="text-1xl mx-1"> {data.currentStreak}</span>
        </div>
      </div>
      <hr></hr>

      <div className="flex justify-evenly flex-wrap">
        <p className="text-center mx-1">Weeks: {weeks}</p>
        <p className="text-center mx-1">Days: {totalDays}</p>
        <p className="text-center mx-1">Achieved: {daysAchieved}</p>
        <p className="text-center mx-1">Missed: {daysmissed}</p>
        <p className="text-center mx-1">
          Highest Streak: {data.highestStreak}
        </p>
      </div>
    </div>
  );
}
