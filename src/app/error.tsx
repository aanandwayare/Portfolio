'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[Portfolio Error]', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center space-y-6 max-w-md"
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl font-black font-heading text-foreground tracking-tight">
            Something went wrong
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            An unexpected error occurred. Please try refreshing the page.
          </p>
          {error?.digest && (
            <p className="text-xs font-mono text-muted-foreground/60">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 active:scale-[0.97] transition-all shadow-lg shadow-primary/20"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-border text-foreground text-sm font-medium hover:bg-elevated transition-all"
          >
            <Home className="w-4 h-4 text-muted-foreground" />
            Go Home
          </button>
        </div>
      </motion.div>
    </div>
  );
}
