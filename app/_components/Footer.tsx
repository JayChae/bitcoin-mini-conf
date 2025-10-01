import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">
              {t("contact")}
            </h3>
            <div className="space-y-2">
              <p className="text-white/80 text-sm font-medium">{t("email")}</p>
              <Link
                href="mailto:bitcoinspecter@gmail.com"
                className="text-white/60 hover:text-white text-sm transition-colors duration-200"
              >
                bitcoinspecter@gmail.com
              </Link>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">
              {t("location")}
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">
                  {t("day1")}
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t("address1")}
                </p>
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium mb-1">
                  {t("day2")}
                </p>
                <div className="space-y-1">
                  <p className="text-white/60 text-sm">{t("address2")}</p>
                  <p className="text-white/60 text-sm">{t("address3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <Link
              href="https://x.com/Bitcoinminiconf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition-colors duration-200 sm:order-2"
            >
              <Image
                src="/sns/x.svg"
                alt="X (Twitter)"
                width={24}
                height={24}
                className="opacity-60 hover:opacity-100 transition-opacity duration-200"
              />
            </Link>
            <p className="text-white/60 text-sm sm:order-1">
              © 2025 Bitcoin Mini Conference. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
