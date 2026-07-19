import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jirun Pon | Academic Portfolio',
  description: 'Modern academic portfolio showcasing experience, education, and projects.',
  keywords: [
    'portfolio',
    'academic',
    'developer',
    'engineer',
    'projects',
    'experience',
  ],
  authors: [{ name: 'Jirun Pon' }],
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
    type: 'website',
    locale: 'en_US',
    url: 'https://jirun.dev',
    title: 'Jirun Pon | Academic Portfolio',
    description: 'Modern academic portfolio showcasing experience, education, and projects.',
    images: [
      {
        url: 'https://jirun.dev/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jirun Pon Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jirun Pon | Academic Portfolio',
    description: 'Modern academic portfolio showcasing experience, education, and projects.',
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
      </head>
      <body className="bg-slate-950 text-slate-50 antialiased">
        <div className="relative min-h-screen overflow-hidden">
          {/* Animated background gradients */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
