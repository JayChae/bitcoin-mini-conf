"use client";

import Image from "next/image";
import { X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

// 모달 컴포넌트
function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const handleModal = () => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      ref={handleModal}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />

      {/* Image */}
      <div className="relative max-w-[90vw] max-h-[90vh]">
        <Image
          src="/schedules/brochure.jpg"
          alt="행사 브로셔"
          width={1200}
          height={800}
          className="object-contain max-w-full max-h-full"
          priority
        />
      </div>
    </div>
  );
}

type Props = {
  triggerText: string;
};

export default function BrochureModalTrigger({ triggerText }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="group relative inline-flex items-center justify-center gap-3 px-10 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 ease-out cursor-pointer"
      >
        <span className="relative z-10">{triggerText}</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />

        {/* Subtle shine effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </>
  );
}
