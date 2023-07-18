'use client';
import { useAuthContext } from '@/app/context/AuthContext';
import { useRouter } from 'next/router';
export default function HabitPage() {
  const { user } = useAuthContext();
  const router = useRouter();

  return (
    <div>
      <p>{router.query.id}</p>
    </div>
  );
}
