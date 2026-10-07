import React from 'react';
import { motion } from 'framer-motion';
import { GaneshMotif } from '../components/GaneshMotif';
import { HangingLantern } from '../components/HangingLantern';
import { FloralGarlandLeft, FloralGarlandRight } from '../components/FloralGarland';
import { WEDDING_DATA } from '../data/weddingData';
import { ChevronRight } from 'lucide-react';

export const WeddingCover = ({ onOpenInvitation }) => {
  const bgImg = WEDDING_DATA.images.couple;
  const fallbackImg = WEDDING_DATA.fallbackImages.couple;

  return (
    <div className="relative w-full h-full min-h-screen-ios flex flex-col justify-between overflow-hidden select-none bg-[#120205]">
      {/* 1. TOP BACKGROUND PHOTO WITH WARM BOKEH LIGHTS */}
      <div className="absolute top-0 left-0 right-0 h-[48%] overflow-hidden z-0">
        <img
          src={bgImg}
          onError={(e) => {
            e.target.src = fallbackImg;
          }}
          alt="Ravi Prakash & Jyoti Singh Couple Photo"
          className="w-full h-full object-cover object-top animate-ken-burns scale-105"
        />
        {/* Soft Golden Bokeh Glow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-amber-950/20 to-black/80" />
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-amber-300/30 rounded-full blur-2xl animate-pulse" />
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-rose-400/25 rounded-full blur-xl animate-pulse" />
      </div>

      {/* Top Header Hamburger / Decor Bar */}
      <div className="relative z-20 flex justify-end p-4 pt-6 text-amber-100">
        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-amber-400/40 flex flex-col justify-center items-center gap-1 cursor-pointer">
          <div className="w-4 h-[2px] bg-amber-300" />
          <div className="w-4 h-[2px] bg-amber-300" />
          <div className="w-4 h-[2px] bg-amber-300" />
        </div>
      </div>

      {/* 2. CREAM SCALLOPED TEMPLE ARCH INVITATION CARD */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-[92%] max-w-sm mx-auto mt-auto mb-4 flex flex-col items-center"
      >
        {/* Ivory Card Container */}
        <div className="w-full bg-[#FFFDF9] text-[#5C0612] rounded-t-[50px] rounded-b-[36px] shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-2 border-[#D4AF37] relative overflow-hidden px-5 pt-7 pb-6 flex flex-col items-center text-center">
          
          {/* Subtle Textured Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Scalloped Arch Gold Trim Accent */}
          <div className="absolute top-0 inset-x-0 h-4 border-b border-[#D4AF37]/40 bg-gradient-to-b from-[#F3E5AB]/40 to-transparent" />

          {/* Left & Right Hanging Golden Lanterns */}
          <div className="absolute top-8 left-2 z-20">
            <HangingLantern className="w-6 h-20" />
          </div>
          <div className="absolute top-8 right-2 z-20">
            <HangingLantern className="w-6 h-20" />
          </div>

          {/* Left & Right Side Floral Garlands */}
          <div className="absolute -left-3 top-12 bottom-10 z-10">
            <FloralGarlandLeft className="w-14 h-72 opacity-95" />
          </div>
          <div className="absolute -right-3 top-12 bottom-10 z-10">
            <FloralGarlandRight className="w-14 h-72 opacity-95" />
          </div>

          {/* GANESH MOTIF AT TOP OF CARD */}
          <div className="relative z-20 mb-2">
            <GaneshMotif className="w-14 h-14 sm:w-16 sm:h-16" />
          </div>

          {/* GREETING HEADING */}
          <p className="text-xl sm:text-2xl font-script text-[#7C0A19] font-bold tracking-wide relative z-20">
            Together With Our Families
          </p>

          <p className="text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.2em] text-[#78350F] font-semibold mt-1 max-w-[220px] leading-snug relative z-20">
            WE CORDIALLY INVITE YOU TO THE WEDDING OF
          </p>

          {/* COUPLE NAMES CALLIGRAPHY */}
          <div className="my-3 relative z-20 w-full px-2">
            <h1 className="text-4xl sm:text-5xl font-script text-[#7C0A19] font-bold drop-shadow-sm leading-tight">
              {WEDDING_DATA.groom}
            </h1>
            
            <div className="text-2xl font-script text-[#B45309] font-bold my-0.5">
              &
            </div>

            <h1 className="text-4xl sm:text-5xl font-script text-[#7C0A19] font-bold drop-shadow-sm leading-tight">
              {WEDDING_DATA.bride}
            </h1>
          </div>

          {/* GOLDEN ORNAMENTAL SEPARATOR */}
          <div className="flex items-center justify-center gap-2 my-2 relative z-20 w-full">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">❖ ❦ ❖</span>
            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* TAGLINE */}
          <p className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.15em] text-[#6B21A8]/90 font-semibold px-4 leading-relaxed relative z-20 my-2">
            A CELEBRATION OF LOVE, TOGETHERNESS AND A BEAUTIFUL NEW BEGINNING
          </p>

          {/* PILL BUTTON matching reference picture */}
          <motion.button
            onClick={onOpenInvitation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 py-3 px-7 rounded-full bg-gradient-to-r from-[#7C0A19] via-[#8B001A] to-[#580010] text-[#FFFDF9] font-serif font-bold text-sm tracking-wider shadow-[0_4px_15px_rgba(124,10,25,0.4)] border border-[#F3E5AB] flex items-center gap-2 group relative z-30"
          >
            <span>Open Invitation</span>
            <ChevronRight className="w-4 h-4 text-[#F3E5AB] group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* BOTTOM FLORAL BASE DECORATION */}
        <div className="w-full flex justify-between items-center -mt-5 relative z-20 px-2 pointer-events-none">
          <div className="w-16 h-12 bg-[radial-gradient(#be123c_60%,transparent)] rounded-full blur-md opacity-40" />
          <div className="text-[11px] font-sans text-amber-200/80 tracking-widest uppercase font-medium drop-shadow-md">
            Tap to Begin
          </div>
          <div className="w-16 h-12 bg-[radial-gradient(#be123c_60%,transparent)] rounded-full blur-md opacity-40" />
        </div>
      </motion.div>
    </div>
  );
};
