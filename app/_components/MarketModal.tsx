"use client";

import { useEffect } from "react";
import { type Market } from "../messages/markets";

type Props = {
  market: Market | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function MarketModal({ market, isOpen, onClose }: Props) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !market) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-purple-600/60 rounded-3xl" />

        {/* Animated border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-400 to-purple-600 p-[3px]">
          <div className="h-full w-full bg-black/95 rounded-3xl" />
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-12">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-purple-500/20 hover:bg-purple-500/40 text-white hover:text-purple-200 transition-all duration-300 group cursor-pointer"
          >
            <svg
              className="w-6 h-6 transform group-hover:rotate-90 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              {market.name}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full" />
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-purple-200 mb-4">
              About
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {market.description}
            </p>
          </div>

          {/* Features section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-purple-200 mb-4">
              Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {market.features?.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-purple-500/10 border border-purple-500/20"
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              )) || (
                <div className="col-span-2 text-gray-400 italic">
                  Features information coming soon...
                </div>
              )}
            </div>
          </div>

          {/* Contact/Links section */}
          <div className="space-y-4">
            {market.website && (
              <a
                href={market.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visit Website
              </a>
            )}

            {market.contact && (
              <div className="flex items-center gap-3 text-gray-300">
                <svg
                  className="w-5 h-5 text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>{market.contact}</span>
              </div>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-purple-400/20 rounded-full animate-pulse"
                style={{
                  left: `${10 + i * 20}%`,
                  top: `${5 + i * 15}%`,
                  animationDelay: `${i * 0.8}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
