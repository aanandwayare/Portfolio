'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Portfolio Global Error]', error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111315',
          color: '#F6F5F3',
          fontFamily: 'system-ui, sans-serif',
          textAlign: 'center',
          padding: '1rem',
        }}
      >
        <div style={{ maxWidth: '400px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'rgba(255, 107, 0, 0.12)',
              border: '1px solid rgba(255, 107, 0, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <AlertTriangle style={{ width: 28, height: 28, color: '#FF6B00' }} />
          </div>

          <h1
            style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              marginBottom: '0.5rem',
              color: '#F6F5F3',
            }}
          >
            Critical Error
          </h1>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#8E8B84',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
            }}
          >
            A critical error occurred. Please refresh the page to continue.
          </p>

          {error?.digest && (
            <p
              style={{
                fontSize: '0.7rem',
                fontFamily: 'monospace',
                color: '#66645E',
                marginBottom: '1.5rem',
              }}
            >
              Error ID: {error.digest}
            </p>
          )}

          <button
            onClick={() => reset()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.625rem 1.5rem',
              borderRadius: '9999px',
              background: '#FF6B00',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Reload Page
          </button>
        </div>
      </body>
    </html>
  );
}
