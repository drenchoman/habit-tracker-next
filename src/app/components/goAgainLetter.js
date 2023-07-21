import { useState } from 'react';

export default function GoAgainLetter({ d }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div key={d.id}>
      {d.status == true ? (
        <p onClick={() => setClicked(!clicked)} className="text-xl">
          {d.letter}
        </p>
      ) : (
        <p className="text-xl opacity-50">{d.letter}</p>
      )}
      {clicked ? (
        <div>
          <p>{d.date}</p>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
