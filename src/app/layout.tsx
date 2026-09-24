import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nevorafoods.in'),
  title: 'NEVORA | New Era of Everyday Food - Wholesome Millet Snacks & Pure Spices',
  description:
    'Discover Nevora: 100% millet snacks made without maida or palm oil, and authentic low-RPM slow ground spices. Pure, authentic, traditional goodness for everyday life.',
  keywords: [
    'Nevora',
    'Millet Snacks',
    'Ragi Chakli',
    'Ragi Chips',
    'No Palm Oil Snacks',
    'No Maida Snacks',
    'Low RPM Grinded Spices',
    'Kutta Mirchi',
    'Kutta Haldi',
    'Kutta Dhaniya',
    'Healthy Indian Snacks',
  ],
  openGraph: {
    title: 'NEVORA | New Era of Everyday Food',
    description:
      'Wholesome millet snacks and traditional low-RPM ground spices. Pure ingredients, zero preservatives, 100% goodness.',
    images: ['/images/logo.jpeg'],
  },
  icons: {
    icon: [
      { url: '/icon.png' },
      { url: '/favicon.ico' },
    ],
    apple: [{ url: '/icon.png' }],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FDFBF7] text-[#222A23] font-sans selection:bg-[#254D2C] selection:text-[#FDFBF7]">
        {children}
      </body>
    </html>
  );
}

