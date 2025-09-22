import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkVeil from "./_components/DarkVeil";
import Nav from "./_components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bitcoin Mini Conference",
  description: "Bitcoin Mini Conference",
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="size-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased size-full relative`}
      >
        <Nav />
        {children}
        <DarkVeil speed={0.2} />
      </body>
    </html>
  );
}
