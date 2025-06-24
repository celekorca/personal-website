// Next.js Error Boundary for /admin route (App Router expects error.tsx in the route root)
'use client';

import React from 'react';

export default function AdminError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Something went wrong in Admin!</h2>
          <pre style={{ color: 'red', margin: '1rem auto', maxWidth: 600, whiteSpace: 'pre-wrap' }}>{error.message}</pre>
          <button onClick={() => reset()} style={{ marginTop: 20, padding: '0.5rem 2rem', borderRadius: 6, background: '#6366f1', color: '#fff', border: 'none', fontWeight: 'bold' }}>
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
