'use client';
import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Lexend_Mega } from 'next/font/google';
import { AuthContextProvider } from './context/AuthContext';

export const metadata = {
  title: 'Go Again',
  description: 'A simple habit tracker. Add. Do. Go Again.',
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
      </body>
    </html>
  );
}
