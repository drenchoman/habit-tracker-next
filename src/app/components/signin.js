'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import signIn from '../firebase/signin';
import ForgotPassword from './forgotPassword';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { result, error } = await signIn(email, password);
    if (error) {
      setError(error);
      return;
    } // else successful
    router.push('/home');
  };
  return (
    <>
      <form
        className="p-2 border-black bg-neobackground border-4 rounded-md shadow-shadz"
        onSubmit={handleForm}
      >
        <div className="flex flex-col my-1">
          <label className="my-1" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@example.com"
            className="p-2 my-1 border-4 border-black rounded-md"
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
            className="p-2 my-1 border-4 border-black rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            id="password"
            autoComplete="on"
          />
        </div>
        {error ? <span className="text-center">{error}</span> : ''}
        <div className="flex flex-col items-center">
          <button
            className="border-black bg-neocard border-4 rounded-md shadow-shadz my-2 mx-4 py-2 px-4 "
            type="submit"
          >
            {loading ? 'Loading...' : 'Sign in'}
          </button>
        </div>
      </form>
      <ForgotPassword />
    </>
  );
}
