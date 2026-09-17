import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  display: 'swap',
});

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
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#FDFBF7] text-[#222A23] font-sans selection:bg-[#254D2C] selection:text-[#FDFBF7]">
        {children}
      </body>
    </html>
  );
}
