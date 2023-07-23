import { useRouter } from 'next/navigation';
import { BsArrowLeft } from 'react-icons/Bs';
export default function GoBack() {
  const router = useRouter();
  return (
    <div onClick={() => router.back()}>
      <BsArrowLeft size={36} />
    </div>
  );
}
