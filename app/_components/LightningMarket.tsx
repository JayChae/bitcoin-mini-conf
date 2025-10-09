"use client";

import { useState } from "react";
import { type Market } from "../messages/markets";
import MarketModal from "./MarketModal";

export default function LightningMarket({ markets }: { markets: Market[] }) {
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMarketClick = (market: Market) => {
    setSelectedMarket(market);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMarket(null);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {markets.map((market, index) => (
          <MarketCard
            key={market.name}
            market={market}
            index={index}
            onClick={() => handleMarketClick(market)}
          />
        ))}
      </div>

      <MarketModal
        market={selectedMarket}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

function MarketCard({
  market,
  index,
  onClick,
}: {
  market: Market;
  index: number;
  onClick: () => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-purple-600/30 rounded-2xl opacity-80 group-hover:opacity-100 transition-all duration-500" />

      {/* Animated border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 to-purple-700/50 p-[2px] group-hover:from-purple-400 group-hover:to-purple-600 transition-all duration-500">
        <div className="h-full w-full bg-black/90 rounded-2xl" />
      </div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col justify-between min-h-[200px]">
        {/* Market Name */}
        <div className="mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
            {market.name}
          </h3>

          {/* Animated underline */}
          <div className="h-1 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6 group-hover:text-gray-100 transition-colors duration-300 line-clamp-3">
          {market.description}
        </p>

        {/* Click to view more */}
        <div className="mt-auto">
          <div className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm font-medium">
            Click to view details
            <svg
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-purple-400/30 rounded-full animate-pulse ${
                isHovered ? "opacity-100" : "opacity-0"
              } transition-opacity duration-500`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
