'use client';

import { useEffect } from 'react';

export default function SecurityProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Console security warning to prevent Self-XSS and inform inspectors
    if (typeof window !== 'undefined') {
      console.log(
        '%c🔒 Security Notice: Anand Wayare Portfolio\n%cThis production environment is protected. All client-side source maps are disabled and runtime security policies are active.',
        'color: #C27A45; font-size: 16px; font-weight: bold; padding: 4px 0;',
        'color: #A6A39C; font-size: 12px; line-height: 1.5;'
      );
    }
  }, []);

  return <>{children}</>;
}
