// app/dashboard/page.tsx
'use client';

import DashboardStats from './components/DashboardStats';
import RegistrationReports from './components/RegistrationReports';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section with Pool Image */}
      <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl bg-gray-200">
        <Image
          src="/images/pool-hero.jpg"
          alt="Luxury Swimming Pool"
          fill
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
          priority
          onError={(e) => {
            console.error('Image failed to load:', e);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Swimming Pool Management</h1>
            <p className="text-xl text-white/90">Professional Pool Management System</p>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
        <DashboardStats />
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Reports</h2>
          <RegistrationReports />
        </div>
      </div>
    </div>
  );
}