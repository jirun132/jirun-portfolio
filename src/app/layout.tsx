import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Jirun Pongsawatmanit | Occupational Medicine Physician',
  description: 'Occupational & Environmental Medicine Resident at Ramathibodi Hospital. Specializing in occupational epidemiology and workplace health research.',
  keywords: [
    'occupational medicine',
    'physician',
    'researcher',
    'occupational epidemiology',
    'workplace health',
    'environmental medicine',
    'Ramathibodi Hospital',
    'Bangkok',
    'Thailand',
  ],
  authors: [{ name: 'Dr. Jirun Pongsawatmanit' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://jirun.dev',
    title: 'Dr. Jirun Pongsawatmanit | Occupational Medicine Physician',
    description: 'Occupational & Environmental Medicine Resident. Researcher in occupational epidemiology and workplace health.',
    images: [
      {
        url: 'https://jirun.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Jirun Pongsawatmanit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jirun Pongsawatmanit | Occupational Medicine Physician',
    description: 'Occupational & Environmental Medicine Resident at Ramathibodi Hospital.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020617" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Dr. Jirun Pongsawatmanit',
              url: 'https://jirun.dev',
              sameAs: [
                'https://orcid.org/0009-0002-0028-1204',
                'https://github.com/jirun132',
                'https://linkedin.com/in/jirun',
              ],
              jobTitle: 'Occupational & Environmental Medicine Resident',
              workLocation: 'Ramathibodi Hospital, Bangkok, Thailand',
              image: 'https://jirun.dev/profile.jpg',
            }),
          }}
        />
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          {/* Animated background gradients */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
