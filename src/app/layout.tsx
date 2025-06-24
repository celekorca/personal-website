// Root layout for Next.js App Router
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Logo from '@/components/Logo';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Business Plan',
  description: 'Business Plan - Your business planning solution',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-gray-50">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Logo className="h-10 w-10" />
              <h1 className="text-2xl font-semibold text-gray-900">Business Plan</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
              <Link href="/admin" className="text-gray-700 hover:text-indigo-600">Operational strategy</Link>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="container mx-auto px-6 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Mely. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
