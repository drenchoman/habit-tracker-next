'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import signUp from './firebase/signup';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.error(error);
    }

    // else successful
    console.log(result);
    return router.push('/admin');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <form onSubmit={handleForm}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
              className="bg-blue-400"
              name="email"
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              type="password"
              id="password"
              placeholder="hunter2"
            />
          </div>
          <button
            className="bg-blue-400 hover:bg-blue-600 my-2 mx-4 py-2 px-4 rounded"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </main>
  );
}
