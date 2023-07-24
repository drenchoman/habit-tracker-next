import { useState } from 'react';
import DialogModal from './dialogModal';

export default function GoAgainLetter({ d }) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="mx-3 " key={d.id}>
      {d.status == true ? (
        <p onClick={() => setIsOpened(true)} className="text-4xl">
          {d.letter}
        </p>
      ) : (
        <p
          onClick={() => setIsOpened(true)}
          className="text-4xl opacity-50"
        >
          {d.letter}
        </p>
      )}
      <DialogModal
        title="Date"
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <p>{d.date}</p>
      </DialogModal>
    </div>
  );
}
