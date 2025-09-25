import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkVeil from "../_components/DarkVeil";
import Nav from "../_components/Nav";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import navItems from "../messages/nav";

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
    icon: "/logo.png",
  },
  openGraph: {
    title: "Bitcoin Mini Conference",
    siteName: "Bitcoin Mini Conference",
    images: [
      {
        url: "https://bitcoin-mini-conf.vercel.app/logo.png",
        width: 250,
        height: 250,
        alt: "Bitcoin Mini Conference",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitcoin Mini Conference",
    description: "Bitcoin Mini Conference",
    images: ["https://bitcoin-mini-conf.vercel.app/logo.png"],
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = locale === "ko" ? "ko" : "en";
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <html lang={locale} className="size-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased size-full relative overflow-y-auto`}
      >
        <NextIntlClientProvider>
          <Nav items={navItems[lang]} />
          {children}
        </NextIntlClientProvider>
        <DarkVeil speed={0.4} />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
