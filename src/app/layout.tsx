import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jammat Ridwanullah - Islamic Community",
  description: "A premium Islamic community website with prayer times, Quran recitation, and spiritual resources.",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="font" href="/assets/fonts/Amiri-Bold.woff2" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/assets/img/quran-books.webp" type="image/webp" />
      </head>
      <body
        className={`font-amiri bg-gradient-to-b from-green-50 to-white text-gray-800 min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
