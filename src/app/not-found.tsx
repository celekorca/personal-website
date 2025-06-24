// Next.js Custom 404 for App Router
'use client';

import React from 'react';

export default function NotFound() {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>404 - Page Not Found</h2>
          <p>The page you&apos;re looking for does not exist or has been moved.</p>
          <a href="/" style={{ color: '#6366f1', fontWeight: 'bold', marginTop: 20, display: 'inline-block' }}>Go Home</a>
        </div>
      </body>
    </html>
  );
}
