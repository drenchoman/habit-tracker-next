'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { Bungee_Spice } from 'next/font/google';
import { AuthContextProvider } from './context/AuthContext';

const inter = Inter({ subsets: ['latin'] });

const bungeeFont = Bungee_Spice({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-spicy',
});

// export const metadata = {
//   title: 'Habit Tracker',
//   description: 'An application to track my habits',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bungeeFont.variable}`}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
