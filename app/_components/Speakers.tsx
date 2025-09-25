"use client";

import { useState, useEffect } from "react";
import ChromaGrid from "@/components/ChromaGrid";
import ShinyText from "@/components/ShinyText";
import { type Speaker } from "../messages/speakers";

type Props = {
  speakers: Speaker[];
  moreText: string;
  closeText: string;
};

export default function Speakers({ speakers, moreText, closeText }: Props) {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 화면 크기 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 모바일에서는 6명만, 데스크톱에서는 모든 스피커 표시
  const displayedSpeakers =
    isMobile && !showAll ? speakers.slice(0, 6) : speakers;

  const hasMoreSpeakers = isMobile && speakers.length > 6;

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <ChromaGrid
        items={displayedSpeakers}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
        className="md:gap-14"
      />

      {/* 모바일에서만 더보기 버튼 표시 */}
      {hasMoreSpeakers && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 bg-gradient-to-r from-accent/20 to-accent/30 hover:from-accent/30 hover:to-accent/40 
                     border border-accent/40 rounded-full text-accent font-semibold transition-all duration-300
                     hover:scale-105 backdrop-blur-sm cursor-pointer"
        >
          {showAll ? closeText : `${moreText} (+${speakers.length - 6})`}
        </button>
      )}

      <ShinyText text="More speakers on the way!" className="text-2xl" />
    </div>
  );
}
