import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/app/ui/theme-provider';
import React, { Suspense } from 'react';
import Modal from './Modal copy';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { fetchMeta } from './lib/data';
import ReactGA from 'react-ga4';

if (
  typeof process.env.NEXT_GA_TRACKING_CODE === 'string' &&
  process.env.NEXT_GA_TRACKING_CODE !== ''
) {
  ReactGA.initialize(process.env.NEXT_GA_TRACKING_CODE);
} else {
  ReactGA.initialize('foo', { testMode: true });
}

let meta = await fetchMeta();

const inter = Open_Sans({ subsets: ['latin'] });
export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-smooth' lang='en' suppressHydrationWarning>
      <head>
        <link rel={'icon'} href={'/icon.ico'} />
        <link rel={'apple-touch-icon'} href={'/icon1.png'} type='image/png' />
      </head>
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          enableColorScheme={false}
        >
          {children}
        </ThemeProvider>
        <Suspense>
          <Modal />
        </Suspense>
      </body>
    </html>
  );
}
