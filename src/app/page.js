'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button
          className="bg-green-400 hover:bg-green-600 text-white py-2 px-4 rounded my-2 mx-2"
          onClick={() => setCount(count + 1)}
        >
          Add
        </button>
        <button
          className="bg-red-400 hover:bg-red-600 text-white py-2 px-4 rounded my-2 mx-2"
          onClick={() => setCount(count - 1)}
        >
          Subtract
        </button>
      </div>
      <div>
        <span className=" text-4xl">{count}</span>
      </div>
      <div>
        <Link
          className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded my-2 mx-2"
          href="/test"
        >
          Test
        </Link>
      </div>
    </main>
  );
}
