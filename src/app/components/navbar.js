import Link from 'next/link';
import { MdAddCircleOutline } from 'react-icons/md';

export default function Navbar() {
  return (
    <div className="flex justify-between items-center my-2">
      <Link passHref href="/home">
        <h2 className="text-4xl font-bold my-2">Go Again</h2>
      </Link>

      <Link passHref href="/home/add">
        <MdAddCircleOutline size={36} />
      </Link>
    </div>
  );
}
