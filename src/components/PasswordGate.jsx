import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GaneshMotif } from './GaneshMotif';
import { Lock, KeyRound, Sparkles, AlertCircle } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const PasswordGate = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.trim() === '123456') {
      sessionStorage.setItem('wedding_invitation_unlocked', 'true');
      onAuthenticated();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2500);
    }
  };

  return (
    <div className="relative w-full h-full min-h-screen-ios flex flex-col items-center justify-center px-4 py-8 overflow-hidden select-none bg-[#120205]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0104] via-[#2e030a] to-[#0f0103]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      {/* Ornate Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-sm mx-auto"
      >
        <div className="glass-wedding-card rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.35),0_15px_35px_rgba(0,0,0,0.8)] text-center relative overflow-hidden flex flex-col items-center">
          
          {/* Top Ganesh Motif */}
          <GaneshMotif className="w-16 h-16 sm:w-20 sm:h-20 mb-3" />

          {/* Title */}
          <p className="text-xs uppercase tracking-[0.25em] text-amber-300 font-semibold mb-1">
            Private Wedding Invitation
          </p>

          <h1 className="text-3xl sm:text-4xl font-script text-gold-gradient font-bold drop-shadow-md my-1">
            {WEDDING_DATA.coupleTitle}
          </h1>

          <div className="flex items-center justify-center gap-2 my-3 w-full">
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs">❖ ❦ ❖</span>
            <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <p className="text-xs font-serif text-amber-100/80 mb-5 max-w-[240px]">
            Please enter your invitation passcode to view the wedding card.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            <div className="w-full relative mb-3">
              <input
                type="password"
                inputMode="numeric"
                maxLength={6}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (error) setError(false);
                }}
                placeholder="Enter passcode"
                className="w-full py-3.5 px-10 text-center tracking-[0.3em] font-mono text-lg font-bold rounded-2xl bg-black/60 text-[#FFFDF9] border-2 border-amber-400/60 placeholder:text-amber-200/40 placeholder:tracking-normal placeholder:font-serif placeholder:text-sm focus:outline-none focus:border-amber-300 focus:shadow-gold-glow transition-all"
                autoFocus
              />
              <KeyRound className="w-4 h-4 text-amber-400 absolute left-3.5 top-1/2 -translate-y-1/2 opacity-70" />
            </div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1.5 text-xs text-rose-300 font-sans mb-3 bg-rose-950/60 px-3 py-1 rounded-full border border-rose-500/40"
              >
                <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
                <span>Incorrect passcode. Please try again.</span>
              </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full mt-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#7C0A19] via-[#8B001A] to-[#580010] text-[#FFFDF9] font-serif font-bold text-sm tracking-wider shadow-[0_4px_15px_rgba(124,10,25,0.5),0_0_15px_rgba(212,175,55,0.3)] border border-[#F3E5AB] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Lock className="w-4 h-4 text-[#F3E5AB]" />
              <span>UNLOCK INVITATION</span>
              <Sparkles className="w-4 h-4 text-[#F3E5AB] group-hover:rotate-12 transition-transform" />
            </motion.button>
          </form>

          {/* Subtext */}
          <p className="text-[10px] font-sans text-amber-300/60 uppercase tracking-widest mt-4">
            With Love, Prakash & Singh Families
          </p>
        </div>
      </motion.div>
    </div>
  );
};
