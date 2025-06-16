'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { usePoolStore } from '../../store/poolStore';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to dashboard on initial load
    router.push('/dashboard');
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Swimming Pool Management</h1>
        <p className="mt-2 text-gray-600">Redirecting to dashboard...</p>
      </div>
    </div>
  );
}
