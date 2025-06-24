'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">404 - Admin Page Not Found</h2>
      <p className="mb-6">The admin page you&apos;re looking for does not exist or has been moved.</p>
      <Link 
        href="/admin" 
        className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
      >
        Go to Admin Home
      </Link>
    </div>
  );
}
