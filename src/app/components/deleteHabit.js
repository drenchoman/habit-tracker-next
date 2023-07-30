'use client';
import DialogModal from './dialogModal';
import { useState } from 'react';
export default function DeleteHabit() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpened(true)}
        className="border-black bg-neobackground border-4 rounded-md shadow-shadz my-2 mx-4 py-2 px-4"
      >
        Delete
      </button>
      <DialogModal
        title="Are you sure you want to delete this habit?"
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="border-black bg-neobackground border-4 rounded-md shadow-shadz my-2 mx-4 py-2 px-4"
          >
            Yes
          </button>
        </div>
      </DialogModal>
    </>
  );
}
