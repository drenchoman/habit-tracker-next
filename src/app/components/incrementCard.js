import { ImLoop2 } from 'react-icons/im';
import { TiTick } from 'react-icons/ti';
import Link from 'next/link';
export default function IncrementCard({
  completed,
  count,
  habit,
  updateCount,
}) {
  if (completed) {
    return (
      <div className="flex flex-col-reverse justify-center items-center">
        <Link passHref href={`/home/${habit.id}`}>
          <div className="flex justify-center my-2">
            <span className="text-sm">
              {habit.frequency} / {habit.frequency}
            </span>
          </div>
        </Link>
        <div className="flex justify-center">
          <button
            disabled
            className="my-2 mx-4 py-2 px-4 bg-neogreen flex justify-center items-center border-4 border-black rounded-md shadow-shadz z-10"
            onClick={() => updateCount()}
          >
            Great
            <div className="mx-2">
              <TiTick />
            </div>
          </button>
        </div>
      </div>
    );
  } else
    return (
      <div className="flex flex-col-reverse justify-center items-center">
        <Link passHref href={`/home/${habit.id}`}>
          <div className="flex text-2xl justify-center my-2">
            <span className="text-sm ">
              {count} / {habit.frequency}
            </span>
          </div>
        </Link>
        <div className="flex justify-center">
          <button
            className="my-2 mx-4 py-2 px-4 bg-neoblue flex justify-center items-center border-4 border-black rounded-md shadow-shadz z-10"
            onClick={() => updateCount()}
          >
            Again
            <div className="mx-2">
              <ImLoop2 />
            </div>
          </button>
        </div>
      </div>
    );
}
