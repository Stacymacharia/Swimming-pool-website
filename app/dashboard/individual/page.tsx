// app/dashboard/individual/page.tsx
'use client';

import IndividualRegistration from '../components/IndividualRegistration';

export default function IndividualBookingPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Individual Booking</h1>
      <IndividualRegistration />
    </div>
  );
}