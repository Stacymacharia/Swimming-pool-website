// app/dashboard/bookings/page.tsx
'use client';

import BookingsList from '../components/BookingsList';

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Bookings Management</h1>
      <BookingsList />
    </div>
  );
}