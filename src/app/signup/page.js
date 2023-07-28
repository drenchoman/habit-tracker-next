'use client';
import Signup from '../components/signup';
import GoBack from '../components/goback';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-2xl m-auto  p-4">
      <h1 className='text-2xl my-4 py-2"'>Register</h1>
      <Signup />
      <GoBack />
    </main>
  );
}
