import React from 'react';
import { motion } from 'framer-motion';
import { CountdownTimer } from '../components/CountdownTimer';
import { WEDDING_DATA } from '../data/weddingData';
import { ChevronRight } from 'lucide-react';

export const WelcomePage = ({ onViewEvents }) => {
  const bgImg = WEDDING_DATA.images.weddingHall;
  const fallbackImg = WEDDING_DATA.fallbackImages.weddingHall;

  return (
    <div className="relative w-full h-full min-h-screen-ios flex flex-col justify-between overflow-hidden select-none bg-[#0e0204]">
      {/* 1. BACKGROUND PHOTO: GRAND ILLUMINATED WEDDING HALL AISLE */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img
          src={bgImg}
          onError={(e) => {
            e.target.src = fallbackImg;
          }}
          alt="Decorated Wedding Hall Path"
          className="w-full h-full object-cover object-center animate-ken-burns scale-105 opacity-85"
        />
        {/* Sky & Hall Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#140306]/90 via-transparent to-[#100103]/95" />
      </div>

      {/* Top Header Hamburger / Decor Bar */}
      <div className="relative z-20 flex justify-end p-4 pt-6 text-amber-100">
        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-amber-400/40 flex flex-col justify-center items-center gap-1 cursor-pointer">
          <div className="w-4 h-[2px] bg-amber-300" />
          <div className="w-4 h-[2px] bg-amber-300" />
          <div className="w-4 h-[2px] bg-amber-300" />
        </div>
      </div>

      {/* 2. TOP HEADER SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="relative z-20 text-center flex flex-col items-center pt-2 px-4"
      >
        {/* Golden Filigree Emblem */}
        <div className="flex items-center justify-center gap-2 mb-1 text-[#D4AF37]">
          <span className="text-xl">❦</span>
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="text-2xl font-serif">❖</span>
          <div className="w-10 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
          <span className="text-xl">❦</span>
        </div>

        {/* WELCOME TITLE */}
        <h1 className="text-5xl sm:text-6xl font-script text-gold-gradient font-bold drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] tracking-wide">
          Welcome
        </h1>

        {/* SUBTITLE */}
        <p className="text-[11px] sm:text-xs font-serif uppercase tracking-[0.25em] text-[#FFFDF9]/90 font-semibold mt-1 drop-shadow-md">
          TO OUR WEDDING CELEBRATION
        </p>
      </motion.div>

      {/* 3. BOTTOM SCALLOPED IVORY MESSAGE BOX (MATCHING REFERENCE PICTURE) */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-20 w-[90%] max-w-sm mx-auto mb-6 flex flex-col items-center"
      >
        <div className="w-full bg-[#FFFDF9]/95 text-[#4A030C] rounded-[28px] p-6 sm:p-7 border-2 border-[#D4AF37]/90 shadow-[0_15px_35px_rgba(0,0,0,0.7)] text-center relative overflow-hidden flex flex-col items-center">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Top Gold Filigree Crest */}
          <div className="flex items-center justify-center gap-1 text-[#D4AF37] mb-3">
            <span className="text-sm">✦</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-base font-serif">❦</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-sm">✦</span>
          </div>

          {/* Message Text matching prompt & reference */}
          <p className="text-xs sm:text-sm font-serif text-[#4A030C] leading-relaxed font-medium">
            Dear Family & Friends,
          </p>
          <p className="text-xs sm:text-sm font-serif text-[#4A030C]/90 leading-relaxed font-normal mt-1.5">
            Your presence means the world to us. We are delighted to welcome you to the most special journey of our lives. Let's create beautiful memories together.
          </p>

          {/* Couple Names */}
          <div className="my-3 font-script text-2xl sm:text-3xl font-bold text-[#7C0A19]">
            {WEDDING_DATA.groom} & {WEDDING_DATA.bride}
          </div>

          {/* Quote */}
          <p className="text-[11px] font-serif italic text-[#78350F] leading-snug">
            "Your blessings and presence will make our celebration even more special."
          </p>

          {/* Bottom Gold Filigree Crest */}
          <div className="flex items-center justify-center gap-1 text-[#D4AF37] mt-3 pt-1">
            <span className="text-xs">❖</span>
            <div className="w-12 h-[1px] bg-[#D4AF37]/60" />
            <span className="text-xs">❖</span>
          </div>
        </div>

        {/* Live Countdown Timer Section */}
        <div className="w-full mt-3">
          <CountdownTimer />
        </div>

        {/* VIEW EVENTS BUTTON */}
        <motion.button
          onClick={onViewEvents}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#7C0A19] via-[#8B001A] to-[#580010] text-[#FFFDF9] font-serif font-bold text-sm tracking-wider shadow-[0_4px_15px_rgba(124,10,25,0.5)] border border-[#F3E5AB] flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>VIEW WEDDING EVENTS</span>
          <ChevronRight className="w-4 h-4 text-[#F3E5AB] group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
    </div>
  );
};
