import { useRouter } from 'next/navigation';
import { BsArrowLeft } from 'react-icons/bs';
export default function GoBack() {
  const router = useRouter();
  return (
    <div
      className="my-4 hover:cursor-pointer"
      onClick={() => router.back()}
    >
      <BsArrowLeft size={36} />
    </div>
  );
}
