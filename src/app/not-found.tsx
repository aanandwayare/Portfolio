import Link from 'next/link';
import { Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 text-center bg-[#111315]">
      <div className="max-w-md space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-copper-500/10 border border-copper-500/20 text-copper-400">
          <Sparkles className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-black font-heading bg-gradient-to-r from-copper-300 via-copper-400 to-copper-500 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-bold font-heading text-white">
            Page Not Found
          </h2>
          <p className="text-sm text-muted-foreground">
            The page you are searching for does not exist or has been relocated within Anand&apos;s
            executive portfolio.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-copper-500 hover:bg-copper-600 text-white text-sm font-semibold shadow-lg shadow-copper-500/25 border border-copper-400/30 transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
