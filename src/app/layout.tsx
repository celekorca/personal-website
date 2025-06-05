// Import required dependencies
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Logo from "@/components/Logo";
import "./globals.css";

// Initialize Inter font with Latin subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the application
export const metadata: Metadata = {
  title: "Business Plan",
  description: "Business Plan - Your business planning solution",
};

/**
 * RootLayout component that wraps all pages
 * Provides the basic HTML structure, header, main content, and footer
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {/* Header section with logo and title */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex items-center justify-center sm:justify-between">
            <div className="flex items-center space-x-3">
              {/* Application logo */}
              <Logo className="h-8" />
              {/* Main heading */}
              <h1 className="text-2xl font-bold text-gray-800">Business Plan</h1>
            </div>
          </div>
        </header>

        {/* Main content area that will be populated by page components */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer section with logo and copyright */}
        <footer className="bg-gray-50 py-6 border-t border-gray-200">
          <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
            {/* Copyright notice */}
            <div className="text-gray-500 text-sm">
              © 2025 Mely. All rights reserved.
            </div>
          </div>s
        </footer>
      </body>
    </html>
  );
}
