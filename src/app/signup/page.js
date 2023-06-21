import Signup from '../components/signup';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12">
      <h1 className='text-2xl py-2"'>Register</h1>
      <Signup />
    </main>
  );
}
