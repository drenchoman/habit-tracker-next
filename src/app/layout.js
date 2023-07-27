'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { AuthContextProvider } from './context/AuthContext';

// export const metadata = {
//   title: 'Habit Tracker',
//   description: 'An application to track my habits',
// };
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
