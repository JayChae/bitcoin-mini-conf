"use client";

import { useState } from "react";
import Image from "next/image";
import { Link, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { type NavItem } from "../messages/nav";

type Props = {
  items: NavItem[];
};

export default function Nav({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const locale = useLocale();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      // URL 업데이트
      router.push(href, { scroll: false });
      // 부드러운 스크롤
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  const handleLanguageSwitch = () => {
    const newLocale = locale === "en" ? "ko" : "en";
    router.replace("/", { locale: newLocale });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo-v2.png" alt="Logo" width={40} height={40} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={handleLanguageSwitch}
                className="text-white/80 hover:text-white px-3 py-2 text-sm font-medium transition-colors duration-200 bg-white/10 hover:bg-white/20 rounded-md border border-white/20"
              >
                {locale === "en" ? "한국어" : "English"}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white p-2 rounded-md transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-md rounded-b-lg">
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="text-white/80 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-white/10">
                <button
                  onClick={handleLanguageSwitch}
                  className="text-white/80 hover:text-white block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 bg-white/10 hover:bg-white/20 rounded-md border border-white/20"
                >
                  {locale === "en" ? "한국어" : "English"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
