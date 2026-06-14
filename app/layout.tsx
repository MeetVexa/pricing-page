import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Done-For-You Systems · Pricing',
  description:
    'Pick your tier. Pay how you want — one-time or ongoing monthly management. Same team, same quality, your call.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
