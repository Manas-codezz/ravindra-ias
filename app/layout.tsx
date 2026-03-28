import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ravindra IAS - India\'s Leading UPSC Coaching Institute',
  description: 'Transform your UPSC journey with expert mentorship, comprehensive study materials, and AI-powered analysis. Join 10,000+ successful aspirants.',
  metadataBase: new URL('https://ravindraias.com'),
  openGraph: {
    title: 'Ravindra IAS - India\'s Leading UPSC Coaching Institute',
    description: 'Not just coaching. A rank-generating system.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravindra IAS',
    description: 'India\'s #1 UPSC Coaching Institute',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
