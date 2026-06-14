import './globals.css';

export const metadata = {
  title: 'Pricing · Done-For-You Systems',
  description: 'Pick your tier. Pay how you want — one-time or ongoing monthly management.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
