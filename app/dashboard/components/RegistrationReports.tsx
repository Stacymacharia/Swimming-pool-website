'use client';

import { usePoolStore } from '../../store/poolStore';
import { format } from 'date-fns';
import * as XLSX from 'xlsx';

export default function RegistrationReports() {
  const bookings = usePoolStore((state) => state.bookings);

  // Calculate statistics
  const totalRegistrations = bookings.length;
  const individualRegistrations = bookings.filter(b => !b.isGroup).length;
  const groupRegistrations = bookings.filter(b => b.isGroup).length;

  // Function to download Excel report
  const downloadExcelReport = (type: 'all' | 'individual' | 'group') => {
    let filteredBookings = bookings;
    
    if (type === 'individual') {
      filteredBookings = bookings.filter(b => !b.isGroup);
    } else if (type === 'group') {
      filteredBookings = bookings.filter(b => b.isGroup);
    }

    // Prepare data for Excel
    const excelData = filteredBookings.map(booking => ({
      'Customer Name': booking.customerName,
      'Email': booking.customerEmail,
      'Date': format(new Date(booking.date), 'MMM dd, yyyy'),
      'Time Slot': booking.timeSlot,
      'Status': booking.status,
      'Registration Type': booking.isGroup ? 'Group' : 'Individual'
    }));

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Registrations');

    // Generate Excel file
    XLSX.writeFile(wb, `${type}-registrations-${format(new Date(), 'yyyy-MM-dd')}.xlsx`);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Total Registrations</h3>
          <p className="mt-2 text-3xl font-bold text-blue-600">{totalRegistrations}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Individual Registrations</h3>
          <p className="mt-2 text-3xl font-bold text-green-600">{individualRegistrations}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900">Group Registrations</h3>
          <p className="mt-2 text-3xl font-bold text-purple-600">{groupRegistrations}</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Download Reports</h3>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => downloadExcelReport('all')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Download All Registrations
          </button>
          <button
            onClick={() => downloadExcelReport('individual')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Download Individual Registrations
          </button>
          <button
            onClick={() => downloadExcelReport('group')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
          >
            Download Group Registrations
          </button>
        </div>
      </div>
    </div>
  );
}
