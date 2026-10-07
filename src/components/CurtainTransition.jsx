import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const CurtainTransition = ({ isOpen, onAnimationComplete }) => {
  return (
    <AnimatePresence>
      {!isOpen && (
        <div className="fixed inset-0 z-50 pointer-events-none flex overflow-hidden">
          {/* Central Golden Light Beam Glow when curtains meet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-24 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent blur-xl z-20"
          />

          {/* LEFT CURTAIN PANEL */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{
              duration: 0.75,
              ease: [0.77, 0, 0.175, 1], // cinematic cubic-bezier
            }}
            onAnimationComplete={() => {
              if (onAnimationComplete) onAnimationComplete();
            }}
            className="w-1/2 h-full curtain-texture-left relative flex flex-col justify-between border-r-2 border-amber-400/80 shadow-2xl"
          >
            {/* Top Gold Fringe / Garland Border */}
            <div className="h-16 w-full bg-gradient-to-b from-amber-400/30 to-transparent border-b border-amber-400/50 flex justify-end items-center pr-2">
              <div className="w-4 h-4 rounded-full bg-amber-400/80 shadow-[0_0_10px_#fef08a]" />
            </div>

            {/* Left Curtain Gold Damask Pattern Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

            {/* Bottom Gold Fringe Border */}
            <div className="h-12 w-full bg-gradient-to-t from-amber-400/40 to-transparent border-t border-amber-400/60" />
          </motion.div>

          {/* RIGHT CURTAIN PANEL */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{
              duration: 0.75,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="w-1/2 h-full curtain-texture-right relative flex flex-col justify-between border-l-2 border-amber-400/80 shadow-2xl"
          >
            {/* Top Gold Fringe / Garland Border */}
            <div className="h-16 w-full bg-gradient-to-b from-amber-400/30 to-transparent border-b border-amber-400/50 flex justify-start items-center pl-2">
              <div className="w-4 h-4 rounded-full bg-amber-400/80 shadow-[0_0_10px_#fef08a]" />
            </div>

            {/* Right Curtain Gold Damask Pattern Lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

            {/* Bottom Gold Fringe Border */}
            <div className="h-12 w-full bg-gradient-to-t from-amber-400/40 to-transparent border-t border-amber-400/60" />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
