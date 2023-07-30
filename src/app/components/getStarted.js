import Link from 'next/link';

export default function GetStarted() {
  return (
    <div className="flex flex-col items-center">
      <p className="m-2">Tap below to add your first habit</p>
      <button className="border-black bg-neocard border-4 rounded-md shadow-shadz py-2 px-4 m-2">
        <Link href="/home/add">Add +</Link>
      </button>
    </div>
  );
}
