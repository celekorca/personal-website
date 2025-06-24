// Next.js Not Found (404) for /admin route (App Router expects not-found.tsx in the route root)
'use client';

import React from 'react';
import Link from 'next/link';

export default function AdminNotFound() {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>404 - Admin Page Not Found</h2>
          <p>The admin page you&apos;re looking for does not exist or has been moved.</p>
          <Link href="/admin" style={{ color: '#6366f1', fontWeight: 'bold', marginTop: 20, display: 'inline-block' }}>Go to Admin Home</Link>
        </div>
      </body>
    </html>
  );
}
