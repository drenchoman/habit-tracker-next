import Link from 'next/link';
import Navbarletters from './navbarletters';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center my-2">
      <Link passHref href="/home">
        <h2 className="text-4xl font-bold my-2 flex flex-row">
          <Navbarletters letters="GO AGAIN" />
        </h2>
      </Link>

      <Link passHref href="/home/add">
        <button className="border-black text-xl bg-neocard border-4 rounded-md px-2 m-2 shadow-shadz">
          +
        </button>
      </Link>
    </div>
  );
}
