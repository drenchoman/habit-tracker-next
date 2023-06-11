import Link from 'next/link';
const names = [
  {
    id: 1,
    name: 'oscar',
    age: 27,
    pets: ['Tiny Kitty, Little Kitty'],
  },
  {
    id: 2,
    name: 'katelyn',
    age: 27,
    pets: ['Tiny Kitty, Little Kitty'],
  },
];

export default function page() {
  return (
    <main>
      <div>
        {names.map((n) => (
          <div key={n.id}>
            <Link href={`/names/${n.name}`}>
              <h1>{n.name}</h1>
            </Link>
            <p>{n.age}</p>
            {n.pets.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
