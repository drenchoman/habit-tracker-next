import { useState } from 'react';
import DialogModal from './dialogModal';

export default function GoAgainLetter({ d }) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="mx-2 hover:cursor-pointer " key={d.id}>
      {d.status == true ? (
        <p
          onClick={() => setIsOpened(true)}
          className="font-bold text-4xl text-neotext "
        >
          {d.letter}
        </p>
      ) : (
        <p
          onClick={() => setIsOpened(true)}
          className={`font-bold text-4xl opacity-25 text-neotext `}
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
          <p>{d.date}</p>

          {d.status == true ? <p>Achieved</p> : <p>Missed</p>}
        </div>
      </DialogModal>
    </div>
  );
}
