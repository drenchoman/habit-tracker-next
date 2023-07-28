'use client';
import GoBack from '../components/goback';
import SignIn from '../components/signin';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col max-w-2xl m-auto p-4">
      <h1 className='text-2xl py-2 my-4"'>Sign in</h1>
      <SignIn />
      <GoBack />
    </main>
  );
}
