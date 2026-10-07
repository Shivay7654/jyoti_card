import React from 'react';

export const GaneshMotif = ({ className = "w-16 h-16" }) => {
  return (
    <div className={`inline-flex items-center justify-center relative ${className}`}>
      {/* Outer Golden Glow Aura */}
      <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-md animate-pulse"></div>
      
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-[0_2px_8px_rgba(212,175,55,0.6)] relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 5 C53 5 55 8 55 12 C55 16 53 18 50 18 C47 18 45 16 45 12 C45 8 47 5 50 5 Z"
          fill="url(#goldGradient)"
        />
        {/* Crown / Mukut */}
        <path
          d="M38 24 L50 12 L62 24 L57 28 L50 20 L43 28 Z"
          fill="url(#goldGradient)"
        />
        {/* Ears */}
        <path
          d="M30 32 C18 28 15 42 26 50 C32 54 38 48 38 40 C38 34 34 32 30 32 Z"
          fill="url(#goldGradient)"
          opacity="0.9"
        />
        <path
          d="M70 32 C82 28 85 42 74 50 C68 54 62 48 62 40 C62 34 66 32 70 32 Z"
          fill="url(#goldGradient)"
          opacity="0.9"
        />
        {/* Trunk (Trishul / Ganesha Trunk Curve) */}
        <path
          d="M50 28 C42 28 40 38 40 46 C40 60 48 68 56 68 C62 68 64 62 58 60 C52 58 48 54 48 46 C48 38 52 34 50 28 Z"
          fill="url(#goldGradient)"
        />
        {/* Modak in Trunk */}
        <circle cx="60" cy="62" r="3.5" fill="#fef08a" />
        {/* Tilak mark */}
        <path d="M48 24 H52 V30 H48 Z" fill="#ef4444" />
        <circle cx="50" cy="22" r="1.5" fill="#ef4444" />

        {/* Decorative Base Ornament */}
        <path
          d="M35 78 C42 84 58 84 65 78 C60 74 40 74 35 78 Z"
          fill="url(#goldGradient)"
        />

        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#aa820a" />
            <stop offset="100%" stopColor="#fef08a" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
