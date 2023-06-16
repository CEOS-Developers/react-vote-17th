import './globals.css';
import { Inter } from 'next/font/google';

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
        <div className="phone">{children}</div>
      </body>
    </html>
  );
}
