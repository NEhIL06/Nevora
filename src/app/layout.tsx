import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.nevorafoods.in'),
  title: 'NEVORA | Ragi Chakli Made for Better Snacking',
  description:
    'Bold, crunchy Ragi Chakli made without maida, palm oil, or preservatives. Meet the better everyday snack from Nevora.',
  keywords: [
    'Nevora',
    'Ragi Chakli',
    'Ragi Chakli',
    'Ragi Chips',
    'No Palm Oil Snacks',
    'No Maida Snacks',
    'Healthy Indian Snacks',
  ],
  openGraph: {
    title: 'NEVORA | Snack Like You Mean It',
    description:
      'Wholesome Ragi Chakli with the bold flavour and crunch you actually crave.',
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
