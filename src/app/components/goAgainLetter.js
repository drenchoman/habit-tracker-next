import { useState } from 'react';
import DialogModal from './dialogModal';
import sliceDate from '../utilities/sliceDate';

export default function GoAgainLetter({ d, innerIndex }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div
      className={`mx-2 hover:cursor-pointer opacity-0 test delay${innerIndex} bg-neocontrast shadow-shadz  rounded-md`}
      key={d.id}
    >
      {d.status == true ? (
        <p
          onClick={() => setIsOpened(true)}
          className="font-bold text-4xl text-neotext hover:text-neobackground px-onepx "
        >
          {d.letter}
        </p>
      ) : (
        <p
          onClick={() => setIsOpened(true)}
          className={`font-bold text-4xl opacity-25 hover:text-neobackground  text-neotext px-onepx  `}
        >
          {d.letter}
        </p>
      )}
      <DialogModal
        title="Date"
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <div>
          <p>{sliceDate(d.date)}</p>

          {d.status == true ? <p>Achieved</p> : <p>Missed</p>}
        </div>
      </DialogModal>
    </div>
  );
}
