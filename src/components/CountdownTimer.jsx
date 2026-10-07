import React, { useState, useEffect } from 'react';
import { WEDDING_DATA } from '../data/weddingData';

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isTargetReached: false,
  });

  useEffect(() => {
    const targetDate = new Date(WEDDING_DATA.weddingDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isTargetReached: true,
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isTargetReached: false });
      }
    };

    updateTimer();
    const timerId = setInterval(updateTimer, 1000);

    return () => clearInterval(timerId);
  }, []);

  if (timeLeft.isTargetReached) {
    return (
      <div className="my-6 p-4 rounded-2xl glass-wedding-card text-center border border-amber-400/50 shadow-gold-glow">
        <h3 className="text-xl font-serif font-bold text-gold-gradient">
          Today is the Day!
        </h3>
        <p className="text-sm font-sans text-amber-200 mt-1">
          Let the Celebration Begin! ✨
        </p>
        <p className="text-xs font-script text-amber-300 text-lg mt-2">
          With Love, {WEDDING_DATA.groom} & {WEDDING_DATA.bride}
        </p>
      </div>
    );
  }

  return (
    <div className="my-6 p-4 rounded-2xl glass-wedding-card border border-amber-400/40 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-amber-500/10 animate-pulse pointer-events-none" />
      
      <p className="text-xs uppercase tracking-widest text-amber-300 font-medium mb-3">
        Our Special Day Countdown
      </p>

      <div className="grid grid-cols-4 gap-2 text-center">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Mins', value: timeLeft.minutes },
          { label: 'Secs', value: timeLeft.seconds },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-2 rounded-xl bg-black/40 border border-amber-400/30"
          >
            <span className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient leading-none">
              {String(item.value).padStart(2, '0')}
            </span>
            <span className="text-[10px] sm:text-xs text-amber-200/80 font-sans uppercase tracking-wider mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
