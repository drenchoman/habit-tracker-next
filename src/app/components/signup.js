'use client';
import { useState } from 'react';
import signUp from '../firebase/signup';
import Link from 'next/link';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleForm = async (event) => {
    event.preventDefault();
    const { result, error } = await signUp(email, password);

    if (error) {
      setError(error);
      return console.error(error);
    }

    // else successful
    console.log(result);
    // return router.push('/admin');
  };

  return (
    <form
      className=" p-2 border-black bg-neobackground border-4 rounded-md shadow-shadz"
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
      <div className="flex flex-col items-center my-2">
        <button
          className="border-black bg-neogreen border-4 rounded-md shadow-shadz my-4 mx-4 py-2 px-4"
          type="submit"
        >
          Register
        </button>
      </div>
    </form>
  );
}
