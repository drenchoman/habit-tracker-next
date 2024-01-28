import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Lexend_Mega } from 'next/font/google';
import { AuthContextProvider } from './context/AuthContext';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Go Again',
  description: 'A simple habit tracker. Add. Do. Go Again.',
  icons: [
    {
      rel: 'favicon',
      href: '/favicon.ico',
      type: 'image/ico',
      sizes: 'any',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-icon.png',
    },
  ],
};

const inter = Inter({ subsets: ['latin'] });

const lexend = Lexend_Mega({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
        <Analytics />
      </body>
    </html>
  );
}
