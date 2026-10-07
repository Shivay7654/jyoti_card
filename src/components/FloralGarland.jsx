import React from 'react';

export const FloralGarlandLeft = ({ className = "w-16 h-64" }) => {
  return (
    <svg
      viewBox="0 0 80 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none drop-shadow-md ${className}`}
    >
      {/* Green Vine Path */}
      <path d="M10 0 Q30 80 15 160 T25 320" stroke="#15803d" strokeWidth="3" fill="none" opacity="0.7" />
      
      {/* Leaves */}
      <path d="M15 40 Q-5 30 5 15 Q20 25 15 40 Z" fill="#166534" />
      <path d="M22 90 Q38 80 30 65 Q12 75 22 90 Z" fill="#15803d" />
      <path d="M12 140 Q-8 130 0 115 Q18 125 12 140 Z" fill="#166534" />
      <path d="M20 210 Q40 200 32 185 Q14 195 20 210 Z" fill="#15803d" />
      <path d="M15 270 Q-5 260 5 245 Q20 255 15 270 Z" fill="#166534" />

      {/* Red Roses */}
      <g transform="translate(18, 30)">
        <circle cx="0" cy="0" r="14" fill="#be123c" />
        <circle cx="0" cy="0" r="10" fill="#e11d48" />
        <circle cx="-2" cy="-2" r="6" fill="#f43f5e" />
        <circle cx="0" cy="0" r="3" fill="#fda4af" />
      </g>

      <g transform="translate(10, 150)">
        <circle cx="0" cy="0" r="16" fill="#9f1239" />
        <circle cx="0" cy="0" r="12" fill="#be123c" />
        <circle cx="-2" cy="-2" r="7" fill="#e11d48" />
        <circle cx="0" cy="0" r="3.5" fill="#fecdd3" />
      </g>

      <g transform="translate(22, 260)">
        <circle cx="0" cy="0" r="15" fill="#be123c" />
        <circle cx="0" cy="0" r="11" fill="#f43f5e" />
        <circle cx="-2" cy="-2" r="6" fill="#fb7185" />
        <circle cx="0" cy="0" r="3" fill="#fff1f2" />
      </g>

      {/* White Daisies / Marigolds */}
      <g transform="translate(26, 95)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="0"
            rx="3"
            ry="9"
            fill="#fef08a"
            transform={`rotate(${angle}) translate(0, -7)`}
          />
        ))}
        <circle cx="0" cy="0" r="5" fill="#d97706" />
      </g>

      <g transform="translate(14, 210)">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <ellipse
            key={i}
            cx="0"
            cy="0"
            rx="3.5"
            ry="10"
            fill="#ffffff"
            transform={`rotate(${angle}) translate(0, -8)`}
          />
        ))}
        <circle cx="0" cy="0" r="5.5" fill="#f59e0b" />
      </g>
    </svg>
  );
};

export const FloralGarlandRight = ({ className = "w-16 h-64" }) => {
  return (
    <div className={`transform scale-x-[-1] ${className}`}>
      <FloralGarlandLeft className="w-full h-full" />
    </div>
  );
};
