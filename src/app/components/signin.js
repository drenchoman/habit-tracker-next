'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import signIn from '../firebase/signin';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signIn(email, password);
    if (error) {
      setError(error);
      return console.error(error);
    } // else successful console.log(result); return
    router.push('/admin');
  };
  return (
    <div>
      <form className="flex flex-col" onSubmit={handleForm}>
        <div className="flex flex-col my-1">
          <label className="my-1" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="bg-blue-200 placeholder:text-black text-black
       p-2 my-1"
            name="email"
            type="email"
            id="email"
          />
        </div>
        <div className="flex flex-col my-1">
          <label className="my-1" htmlFor="password">
            Password
          </label>
          <input
            className="bg-blue-200 placeholder:text-black text-black p-2 my-1"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            id="password"
            autoComplete="on"
            placeholder="hunter2"
          />
        </div>
        {error ? <span className="text-center">{error}</span> : ''}
        <button
          className="bg-blue-400 hover:bg-blue-600 my-2 mx-4 py-2 px-4 rounded"
          type="submit"
        >
          Sign in
        </button>

        <button className="bg-red-400 hover:bg-red-700 my-2 mx-4 py-2 px-4 rounded">
          <Link href="/"> Home </Link>
        </button>
      </form>
    </div>
  );
}
