import './globals.css';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Lexend_Mega } from 'next/font/google';
import { AuthContextProvider } from './context/AuthContext';

export async function metadata({}) {
  return {
    title: 'Go Again',
    description: 'A simple habit tracker. Add. Do. Go Again.',
    icons: [
      {
        url: '/favicon.ico',
        type: 'image/ico',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/apple-icon.png',
      },
    ],
  };
}

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
