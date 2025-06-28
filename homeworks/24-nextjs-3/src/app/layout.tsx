import type { Metadata } from 'next';
import './globals.scss';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Country Explorer',
  description: 'App to explore countries around the world',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`app-container ${inter.className}`}>
        <ThemeProvider>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
