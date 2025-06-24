'use client';

import dynamic from 'next/dynamic';

// Dynamically import the AdminDashboard component with no SSR to avoid hydration issues
const AdminDashboard = dynamic(() => import('@/app/components/admin/AdminDashboard'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="animate-pulse text-2xl font-semibold text-gray-700">Loading Dashboard...</div>
    </div>
  ),
});

export default function AdminPage() {
  return <AdminDashboard />;
}
