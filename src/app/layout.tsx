'use client';
import './globals.css';
import { RecoilRoot } from 'recoil';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>ceos-vote</title>
        <link rel="icon" href="/check.png" />
      </head>
      <body>
        <div className="phone"><RecoilRoot>{children}</RecoilRoot></div>
      </body>
    </html>
  );
}
