import Link from 'next/link';

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl text-center font-bold my-2">
        Getting started is easy
      </h2>
      <p className="m-2">Tap below to add your first habit</p>
      <button className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 m-2 rounded">
        <Link href="/home/add">Add +</Link>
      </button>
    </div>
  );
}
