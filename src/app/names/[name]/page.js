import Link from 'next/link';

export default function page({ params }) {
  const capitalise = (word) =>
    word.charAt(0).toUpperCase() + word.slice(1);
  const name = capitalise(params.name);
  return (
    <div>
      <h1>Home page of {name}</h1>
      <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded my-2 mx-2">
        <Link href="/">Home</Link>
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded my-2 mx-2">
        <Link href="/names">Names</Link>
      </button>
    </div>
  );
}
