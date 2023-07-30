'use client';
import DialogModal from './dialogModal';
import { useState } from 'react';
import deleteDocument from '../firebase/firestore/deleteHabit';
import { useRouter } from 'next/navigation';

export default function DeleteHabit({ userid, habitid }) {
  const [isOpened, setIsOpened] = useState(false);
  const router = useRouter();
  const deleteHabit = async () => {
    const { result, error } = await deleteDocument(userid, habitid);
    if (error) {
      console.log('Something went wrong');
    }
    router.push('/home');
  };

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
            onClick={() => deleteHabit()}
            className="border-black bg-neobackground border-4 rounded-md shadow-shadz my-2 mx-4 py-2 px-4"
          >
            Yes
          </button>
        </div>
      </DialogModal>
    </>
  );
}
