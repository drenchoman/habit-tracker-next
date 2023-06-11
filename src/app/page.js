'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello world!</h1>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <span>{count}</span>
      </div>
      <div>
        <Link href="/test">Test</Link>
      </div>
    </main>
  );
}
