// Next.js Not Found (404) for /admin route
'use client';

import React from 'react';

export default function AdminNotFound() {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>404 - Admin Page Not Found</h2>
          <p>The admin page you&apos;re looking for does not exist or has been moved.</p>
          <a href="/admin" style={{ color: '#6366f1', fontWeight: 'bold', marginTop: 20, display: 'inline-block' }}>Go to Admin Home</a>
        </div>
      </body>
    </html>
  );
}
