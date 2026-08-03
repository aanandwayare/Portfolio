import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';
import { constructMetadata, generatePersonJsonLd } from '@/lib/seo';
import { ToastProvider } from '@/components/ui/Toast';
import SecurityProvider from '@/components/ui/SecurityProvider';
import SmoothScroll from '@/components/layout/SmoothScroll';
import MouseSpotlight from '@/components/ui/MouseSpotlight';
import AmbientCanvas from '@/components/ui/AmbientCanvas';
import ScrollProgress from '@/components/ui/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generatePersonJsonLd();

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('portfolio-theme');
                  var theme = savedTheme || 'dark';
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#111315" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-white relative min-h-screen">
        <SecurityProvider>
          <ToastProvider>
            <SmoothScroll>
              <ScrollProgress />
              <AmbientCanvas />
              <MouseSpotlight />
              <div className="relative z-10 flex flex-col min-h-screen">
                {children}
              </div>
            </SmoothScroll>
          </ToastProvider>
        </SecurityProvider>
      </body>
    </html>
  );
}
