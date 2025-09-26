import type { Metadata } from "next";
import "./globals.css";
import DarkVeil from "../_components/DarkVeil";
import Nav from "../_components/Nav";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import navItems from "../messages/nav";
// import localFont from "next/font/local";

// const pretendard = localFont({
//   src: "../PretendardVariable.woff2",
//   variable: "--font-pretendard",
// });

export const metadata: Metadata = {
  title: "Bitcoin Mini Conference",
  description: "Bitcoin Mini Conference",
  icons: {
    icon: "/logo-v2.png",
  },
  openGraph: {
    title: "Bitcoin Mini Conference",
    siteName: "Bitcoin Mini Conference",
    images: [
      {
        url: "https://bitcoin-mini-conf.vercel.app/logo-dark.png",
        width: 200,
        height: 200,
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
    images: ["https://bitcoin-mini-conf.vercel.app/logo-dark.png"],
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const lang = locale === "ko" ? "ko" : "en";

  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className="size-full">
      <body className={`font-pretendard antialiased size-full relative overflow-y-auto`}>
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
