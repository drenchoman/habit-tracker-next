'use client';
import resetpassword from '../firebase/resetpassword';
import DialogModal from './dialogModal';
import { useState } from 'react';
export default function ForgotPassword() {
  const [isOpened, setIsOpened] = useState(false);
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('sending reset', email);
    if (email.length == 0) {
      setResult('Please enter your email');
      return;
    }
    let { result, error } = await resetpassword(email);

    if (error) {
      console.log(error);
    }
    setResult('Check your email! It may be in spam.');
  };

  return (
    <div className="flex flex-col mt-3 items-center">
      <p
        onClick={() => setIsOpened(true)}
        className="text-sm my-1 hover:cursor-pointer hover:underline"
      >
        Forgot your password?
      </p>
      <DialogModal
        title="Reset Password"
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col my-1">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@example.com"
              className="p-2 my-1 border-4 border-black rounded-md"
              name="email"
              type="email"
              required
              id="emailreset"
            />
          </div>
          <div className="flex flex-col content-center">
            <button
              type="submit"
              className="underline underline-offset-2"
            >
              Send link
            </button>
          </div>
          {result ? (
            <div>
              <span>{result}</span>
            </div>
          ) : (
            ''
          )}
        </form>
      </DialogModal>
    </div>
  );
}
