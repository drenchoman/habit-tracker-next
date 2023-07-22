import { ImLoop2 } from 'react-icons/Im';
import { TiTick } from 'react-icons/Ti';
export default function IncrementCard({
  completed,
  count,
  habit,
  updateCount,
}) {
  if (completed) {
    return (
      <div className="flex flex-col-reverse justify-center items-center">
        <div className="flex justify-center">
          <span className="text-sm">
            {habit.frequency} / {habit.frequency}
          </span>
        </div>
        <div className="flex justify-center">
          <button
            disabled
            className="rounded my-2 mx-4 py-2 px-4 bg-green-400 flex justify-center items-center"
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
        <div className="flex text-2xl justify-center">
          <span className="text-sm">
            {count} / {habit.frequency}
          </span>
        </div>
        <div className="flex justify-center">
          <button
            className="rounded my-2 mx-4 py-2 px-4 bg-blue-400 flex justify-center items-center"
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
