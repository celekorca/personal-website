import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './admin.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Operational strategy',
  description: 'Interactive operational strategy dashboard for Mely',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}
