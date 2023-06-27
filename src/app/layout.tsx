'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>vote</title>
      </head>
      <body>
        <div className="phone"><RecoilRoot>{children}</RecoilRoot></div>
      </body>
    </html>
  );
}
