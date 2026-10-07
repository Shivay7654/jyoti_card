import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowLeft, Navigation, Share2 } from 'lucide-react';
import { BaratEffects } from '../components/BaratEffects';
import { FloatingPetals } from '../components/FloatingPetals';
import { WEDDING_DATA } from '../data/weddingData';

export const EventDetailPage = ({ eventId, onBackToEvents }) => {
  // Find current event data
  const event = WEDDING_DATA.events.find((e) => e.id === eventId) || WEDDING_DATA.events[0];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${event.title} - ${WEDDING_DATA.coupleTitle}`,
        text: `You are invited to ${event.title} on ${event.date} at ${event.venue}!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event details copied to clipboard!');
    }
  };

  // Specific glow colors per ceremony
  const ambientGlows = {
    tilak: "from-amber-400/40 via-amber-600/20 to-maroon-950",
    haldi: "from-yellow-400/50 via-amber-500/25 to-stone-950",
    mehandi: "from-emerald-400/35 via-rose-600/25 to-stone-950",
    barat: "from-indigo-400/40 via-purple-600/25 to-slate-950",
    vidai: "from-rose-400/40 via-red-600/20 to-stone-950",
  };

  const glowColor = ambientGlows[eventId] || ambientGlows.tilak;

  return (
    <div className="relative w-full h-full min-h-screen-ios flex flex-col justify-between overflow-hidden select-none bg-[#140205]">
      
      {/* 🌟 FULL BACKGROUND RADIANT AMBIENT LIGHT GLOW LAYER */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Main Ceremony Radial Glow Aura */}
        <div className={`absolute inset-0 bg-gradient-to-b ${glowColor}`} />
        
        {/* Soft Golden Bokeh Glow Orbs */}
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-amber-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-4 w-80 h-80 bg-amber-400/25 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-rose-500/20 rounded-full blur-[120px] animate-pulse" />
        
        {/* Golden Sparkle Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      {/* 1. TOP SECTION: CEREMONY PHOTOGRAPH (TOP 42% VIEWPORT) */}
      <div className="relative w-full h-[42%] overflow-hidden z-10 bg-black">
        <img
          src={event.image}
          onError={(e) => {
            e.target.src = event.fallbackImage;
          }}
          alt={event.title}
          className="w-full h-full object-cover object-top animate-ken-burns scale-105"
        />

        {/* Soft Warm Golden Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10" />

        {/* TOP LEFT FLOATING CIRCULAR BACK ARROW BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onBackToEvents}
          className="absolute top-5 left-4 z-30 p-2.5 rounded-full bg-black/50 text-[#FFFDF9] border border-amber-300/50 backdrop-blur-md shadow-gold-glow hover:bg-black/70 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5 text-amber-200" />
        </motion.button>

        {/* TOP RIGHT SHARE BUTTON */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleShare}
          className="absolute top-5 right-4 z-30 p-2.5 rounded-full bg-black/50 text-[#FFFDF9] border border-amber-300/50 backdrop-blur-md shadow-gold-glow hover:bg-black/70 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        >
          <Share2 className="w-4 h-4 text-amber-300" />
        </motion.button>
      </div>

      {/* Special Effects overlay */}
      {eventId === 'barat' && <BaratEffects />}
      {(eventId === 'mehandi' || eventId === 'haldi' || eventId === 'vidai' || eventId === 'tilak') && (
        <FloatingPetals count={eventId === 'vidai' ? 10 : 20} />
      )}

      {/* 2. LOWER SCALLOPED IVORY ARCH CARD OVERLAY WITH FULL GOLDEN GLOW */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 w-full max-w-md mx-auto -mt-10 px-3 sm:px-4 mb-4 flex flex-col items-center"
      >
        <div className="w-full bg-[#FFFDF9] text-[#4A030C] rounded-t-[40px] rounded-b-[30px] px-4 py-5 sm:px-6 sm:py-6 border-2 border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.45),0_15px_35px_rgba(0,0,0,0.7)] text-center relative overflow-hidden flex flex-col items-center">
          
          {/* Subtle Textured Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#d4af37_0.75px,transparent_0.75px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

          {/* Top Gold Filigree Crest Ornament */}
          <div className="flex items-center justify-center gap-1.5 text-[#D4AF37] mb-1.5 pt-0.5">
            <span className="text-xs">✦</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-lg font-serif">❦</span>
            <div className="w-8 h-[1px] bg-[#D4AF37]" />
            <span className="text-xs">✦</span>
          </div>

          {/* EVENT TITLE */}
          <h2 className={`text-3xl sm:text-4xl font-script font-bold ${event.titleColor || 'text-[#7C0A19]'} mb-2.5 drop-shadow-sm`}>
            {event.title}
          </h2>

          {/* DATE & TIME DETAILS ROW (FULL WIDTH RESPONSIVE FLEX) */}
          <div className="w-full bg-[#FFF9ED] border border-[#F3E5AB] rounded-2xl px-3.5 py-2.5 my-1.5 flex items-center justify-between gap-3 text-left shadow-sm">
            <div className="flex items-center gap-2.5 min-w-0 flex-1">
              <div className="w-9 h-9 rounded-xl bg-[#7C0A19]/10 flex items-center justify-center flex-shrink-0 text-[#7C0A19]">
                <Calendar className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="truncate">
                <p className="text-[10px] uppercase tracking-wider text-[#78350F]/70 font-sans font-semibold">
                  Date & Time
                </p>
                <p className="text-xs sm:text-sm font-serif font-bold text-[#4A030C] truncate">
                  {event.date}
                </p>
              </div>
            </div>

            <div className="text-right flex-shrink-0 border-l border-[#F3E5AB] pl-3">
              <span className="text-xs sm:text-sm font-sans font-bold text-[#7C0A19] bg-[#7C0A19]/10 px-2.5 py-1 rounded-lg inline-block">
                {event.time}
              </span>
            </div>
          </div>

          {/* VENUE DETAILS ROW (FULL WIDTH RESPONSIVE FLEX) */}
          <div className="w-full bg-[#FFF9ED] border border-[#F3E5AB] rounded-2xl px-3.5 py-2.5 my-1.5 flex items-center gap-2.5 text-left shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-[#7C0A19]/10 flex items-center justify-center flex-shrink-0 text-[#7C0A19]">
              <MapPin className="w-4 h-4 stroke-[2.2]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] uppercase tracking-wider text-[#78350F]/70 font-sans font-semibold">
                Venue Location
              </p>
              <p className="text-xs sm:text-sm font-serif font-bold text-[#4A030C] truncate">
                {event.venue}, <span className="font-sans text-xs font-semibold text-[#78350F]">{event.venueAddress}</span>
              </p>
            </div>
          </div>

          {/* DESCRIPTION PARAGRAPH */}
          <p className="text-xs sm:text-sm font-serif italic text-[#5C0612]/90 leading-relaxed my-3 px-1">
            "{event.description}"
          </p>

          {/* FILIGREE SEPARATOR */}
          <div className="flex items-center justify-center gap-2 text-[#D4AF37] my-1 w-full">
            <div className="w-12 h-[1px] bg-[#D4AF37]/50" />
            <span className="text-xs">❖ ❦ ❖</span>
            <div className="w-12 h-[1px] bg-[#D4AF37]/50" />
          </div>

          {/* LOCATION NAVIGATION BUTTON WITH GLOW */}
          <a
            href={event.locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 py-3 px-5 rounded-full bg-gradient-to-r from-[#7C0A19] via-[#8B001A] to-[#580010] text-[#FFFDF9] font-serif font-bold text-xs sm:text-sm tracking-wider shadow-[0_4px_15px_rgba(124,10,25,0.4),0_0_15px_rgba(212,175,55,0.3)] border border-[#F3E5AB] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <Navigation className="w-4 h-4 text-[#F3E5AB]" />
            <span>GET VENUE LOCATION</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};
