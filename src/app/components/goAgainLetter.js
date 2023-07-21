import { useState } from 'react';
import DialogModal from './dialogModal';

export default function GoAgainLetter({ d }) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div key={d.id}>
      {d.status == true ? (
        <p onClick={() => setIsOpened(true)} className="text-xl">
          {d.letter}
        </p>
      ) : (
        <p className="text-xl opacity-50">{d.letter}</p>
      )}
      <DialogModal
        title="hello world"
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <p>testing</p>
      </DialogModal>
    </div>
  );
}
