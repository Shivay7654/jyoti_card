import React from 'react';

export const HangingLantern = ({ className = "w-8 h-24" }) => {
  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      <svg
        viewBox="0 0 40 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_4px_10px_rgba(212,175,55,0.5)]"
      >
        {/* Hanging Chain */}
        <line x1="20" y1="0" x2="20" y2="45" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="3 2" />
        
        {/* Top Ring */}
        <circle cx="20" cy="47" r="3" stroke="#d4af37" strokeWidth="1.5" />
        
        {/* Lantern Dome Cap */}
        <path d="M12 55 C12 50 28 50 28 55 L26 58 H14 L12 55 Z" fill="url(#lanternGold)" />
        
        {/* Lamp Body Glass Chamber */}
        <path d="M13 58 L8 75 C8 82 32 82 32 75 L27 58 H13 Z" fill="url(#lanternGlass)" stroke="#d4af37" strokeWidth="1" />
        
        {/* Inner Flame Glow */}
        <circle cx="20" cy="69" r="4" fill="#fef08a" className="animate-pulse" />
        <circle cx="20" cy="69" r="8" fill="#f59e0b" opacity="0.4" className="animate-ping" />

        {/* Lantern Base */}
        <path d="M14 78 L26 78 L20 85 Z" fill="url(#lanternGold)" />
        
        {/* Hanging Jhumka / Tassel */}
        <line x1="20" y1="85" x2="20" y2="98" stroke="#d4af37" strokeWidth="1" />
        <circle cx="20" cy="101" r="2.5" fill="#d4af37" />

        <defs>
          <linearGradient id="lanternGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#aa820a" />
          </linearGradient>
          <radialGradient id="lanternGlass" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#78350f" stopOpacity="0.4" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
