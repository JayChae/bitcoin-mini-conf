import React from "react";

interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return (
    <div className={`w-full flex justify-center my-8 ${className}`}>
      <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/70 to-transparent" />
    </div>
  );
}
