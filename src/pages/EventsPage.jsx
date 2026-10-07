import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/weddingData';
import { ChevronRight } from 'lucide-react';

export const EventsPage = ({ onSelectEvent, onBackToWelcome }) => {
  // Color configuration per event matching reference picture
  const cardStyles = {
    tilak: {
      cardBg: "bg-gradient-to-r from-[#FFF3C7] via-[#FDE68A] to-[#FCD34D]",
      border: "border-[#D4AF37]/60",
      titleColor: "text-[#6B0F1A]",
      subColor: "text-[#78350F]",
      arrowColor: "text-[#6B0F1A]",
      shadow: "shadow-[0_8px_20px_rgba(212,175,55,0.25)]",
    },
    haldi: {
      cardBg: "bg-gradient-to-r from-[#FEF08A] via-[#FCD34D] to-[#F59E0B]",
      border: "border-[#F59E0B]/60",
      titleColor: "text-[#78350F]",
      subColor: "text-[#92400E]",
      arrowColor: "text-[#78350F]",
      shadow: "shadow-[0_8px_20px_rgba(245,158,11,0.25)]",
    },
    mehandi: {
      cardBg: "bg-gradient-to-r from-[#9F1239] via-[#881337] to-[#50071B]",
      border: "border-[#F43F5E]/60",
      titleColor: "text-[#FFFDF9]",
      subColor: "text-[#FECDD3]",
      arrowColor: "text-[#FFFDF9]",
      shadow: "shadow-[0_8px_20px_rgba(159,18,57,0.35)]",
    },
    barat: {
      cardBg: "bg-gradient-to-r from-[#0F172A] via-[#1E1B4B] to-[#0A0E1A]",
      border: "border-[#FCD34D]/60",
      titleColor: "text-[#FDE68A]",
      subColor: "text-[#F59E0B]",
      arrowColor: "text-[#FCD34D]",
      shadow: "shadow-[0_8px_20px_rgba(15,23,42,0.6)]",
    },
    vidai: {
      cardBg: "bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5]/50 to-[#FCE7F3]",
      border: "border-[#F43F5E]/50",
      titleColor: "text-[#7C0A19]",
      subColor: "text-[#9F1239]",
      arrowColor: "text-[#7C0A19]",
      shadow: "shadow-[0_8px_20px_rgba(252,165,165,0.3)]",
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen-ios flex flex-col justify-between overflow-y-auto select-none bg-[#140205]">
      {/* 1. BACKGROUND ATMOSPHERE WITH ROYAL SUNSET & LIGHTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0104]/90 via-[#33030b]/80 to-[#120103]/95" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-rose-600/15 rounded-full blur-3xl" />
      </div>

      {/* Top Header Navigation Bar */}
      <div className="relative z-20 flex justify-between items-center p-4 pt-6 text-amber-100">
        <button
          onClick={onBackToWelcome}
          className="text-xs font-serif text-[#F3E5AB] bg-black/40 px-3.5 py-1.5 rounded-full border border-amber-400/40 backdrop-blur-md hover:bg-black/60 active:scale-95 transition-all"
        >
          ← Welcome
        </button>

        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-amber-400/40 flex flex-col justify-center items-center gap-1 cursor-pointer">
          <div className="w-4 h-[2px] bg-amber-300" />
          <div className="w-4 h-[2px] bg-amber-300" />
          <div className="w-4 h-[2px] bg-amber-300" />
        </div>
      </div>

      {/* 2. HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center flex flex-col items-center pt-1 px-4 mb-5"
      >
        {/* Filigree Ornament Motif */}
        <div className="flex items-center justify-center gap-2 mb-1 text-[#D4AF37]">
          <span className="text-lg">✦</span>
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="text-xl font-serif">❦</span>
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="text-lg">✦</span>
        </div>

        {/* MAIN TITLE */}
        <h1 className="text-4xl sm:text-5xl font-script text-gold-gradient font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-wide">
          Our Wedding Celebrations
        </h1>

        {/* SUBTITLE */}
        <p className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.2em] text-[#FFFDF9]/90 font-semibold mt-1 drop-shadow-md">
          JOIN US IN THIS BEAUTIFUL JOURNEY
        </p>
      </motion.div>

      {/* 3. STACK OF 5 EVENT CARDS (MATCHING REFERENCE IMAGE EXACTLY) */}
      <div className="relative z-20 space-y-3.5 max-w-sm mx-auto w-[92%] mb-8">
        {WEDDING_DATA.events.map((event, index) => {
          const style = cardStyles[event.id] || cardStyles.tilak;

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 * index }}
              onClick={() => onSelectEvent(event.id)}
              className={`w-full rounded-2xl p-2.5 sm:p-3 border ${style.border} ${style.cardBg} ${style.shadow} hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer group relative overflow-hidden flex items-center justify-between gap-3`}
            >
              {/* Left Image Thumbnail */}
              <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden border border-black/10 flex-shrink-0 shadow-sm bg-black/20">
                <img
                  src={event.image}
                  onError={(e) => {
                    e.target.src = event.fallbackImage;
                  }}
                  alt={event.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Center Content: Event Name & Ceremony Subtitle */}
              <div className="flex-1 min-w-0 pr-2">
                <h3 className={`text-xl sm:text-2xl font-serif font-bold ${style.titleColor} leading-tight truncate`}>
                  {event.shortTitle || event.title.split(" ")[0]}
                </h3>
                <p className={`text-xs sm:text-sm font-serif ${style.subColor} leading-snug truncate opacity-90`}>
                  {event.title.includes(" ") ? event.title.split(" ").slice(1).join(" ") : "Ceremony"}
                </p>
              </div>

              {/* Right Chevron Icon */}
              <div className={`pr-2 flex items-center justify-center ${style.arrowColor} group-hover:translate-x-1 transition-transform`}>
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* FOOTER NOTE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-20 text-center text-xs font-serif italic text-amber-200/80 pb-6"
      >
        <p>Tap any event card to view ceremony details & music</p>
      </motion.div>
    </div>
  );
};
