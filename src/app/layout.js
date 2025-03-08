// src/app/layout.js
'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProviderWrapper } from '@/theme/ThemeContext';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProviderWrapper>
          {children}
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}