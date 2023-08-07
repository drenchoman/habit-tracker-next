'use client';
import { useState } from 'react';
import signUp from '../firebase/signup';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleForm = async (event) => {
    event.preventDefault();
    if (confirmPassword != password) {
      setError('Passwords must match');
      return;
    }
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    const { result, error } = await signUp(email, password);

    if (error) {
      setError(error);
      return console.error(error);
    }

    // else successful
  };

  const handleChange = (event) => {
    setError('');

    if (event.target.name == 'email') {
      setEmail(event.target.value);
    }
    if (event.target.name == 'password') {
      setPassword(event.target.value);
    }
    if (event.target.name == 'confirmpassword') {
      setConfirmPassword(event.target.value);
    }
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
          required
          onChange={(event) => handleChange(event)}
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
          required
          className="p-2 my-1 border-4 border-black rounded-md"
          onChange={(event) => handleChange(event)}
          name="password"
          type="password"
          id="password"
          autoComplete="on"
        />
      </div>
      <div className="flex flex-col my-1">
        <label className="my-1" htmlFor="confirmpassword">
          Confirm Password
        </label>
        <input
          required
          className="p-2 my-1 border-4 border-black rounded-md"
          onChange={(event) => handleChange(event)}
          name="confirmpassword"
          type="password"
          id="confirmpassword"
          autoComplete="on"
        />
      </div>
      {error ? (
        <div className="flex flex-col my-1">
          {' '}
          <span className="text-center">{error}</span>
        </div>
      ) : (
        ''
      )}
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
