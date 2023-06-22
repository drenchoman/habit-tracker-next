'use client';
import Link from 'next/link';
import addHabit from '../firebase/firestore/addHabit';
import { v4 as uuidv4 } from 'uuid';
import { useAuthContext } from '../context/AuthContext';
const names = [
  {
    id: 1,
    name: 'Oscar',
    age: 27,
    pets: ['Tiny Kitty, Little Kitty'],
  },
  {
    id: 2,
    name: 'Katelyn',
    age: 27,
    pets: ['Tiny Kitty, Little Kitty'],
  },
];

export default function Page() {
  const { user } = useAuthContext();

  const handleForm = async (data) => {
    const { result, error } = await addHabit(
      user.uid,
      uuidv4(),
      data
    );
    if (error) {
      return console.log(error);
    }
    console.log(result);
  };

  return (
    <main>
      <div className="md:flex justify-center">
        {names.map((n) => (
          <div className="md:flex flex-col m-4 border p-2" key={n.id}>
            <Link href={`/names/${n.name}`}>
              <h1>{n.name}</h1>
            </Link>
            <p>{n.age}</p>
            {n.pets.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <button
              onClick={() => handleForm(n)}
              className="bg-red-400 hover:bg-red-700 py-2 px-4 my-2 mx-2 rounded"
            >
              Add Data
            </button>
          </div>
        ))}
      </div>
      <div className="text-center ">
        <Link
          className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded my-2 mx-2"
          href="/"
        >
          Home
        </Link>
      </div>
    </main>
  );
}
