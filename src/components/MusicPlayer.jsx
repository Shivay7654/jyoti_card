import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { WEDDING_DATA } from '../data/weddingData';

export const MusicPlayer = ({ currentTrackKey, isUserInteracted, onTogglePlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const synthCtxRef = useRef(null);
  const synthOscsRef = useRef([]);

  // Audio track URLs
  const trackMap = WEDDING_DATA.music;

  // Handle user interaction activation
  useEffect(() => {
    if (isUserInteracted && !isPlaying && !isMuted) {
      playCurrentTrack();
    }
  }, [isUserInteracted, currentTrackKey]);

  // Handle track changing
  useEffect(() => {
    if (isPlaying) {
      playCurrentTrack();
    }
  }, [currentTrackKey]);

  const stopSynthFallback = () => {
    if (synthOscsRef.current.length > 0) {
      synthOscsRef.current.forEach((osc) => {
        try { osc.stop(); } catch (e) {}
      });
      synthOscsRef.current = [];
    }
  };

  const startSynthFallback = (key = 'wedding') => {
    stopSynthFallback();
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!synthCtxRef.current) {
        synthCtxRef.current = new AudioCtx();
      }
      const ctx = synthCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Base frequencies for authentic Indian wedding ambient harmonies
      const freqs = key === 'haldi' 
        ? [293.66, 369.99, 440.00] // D, F#, A (Bright Yellow Joy)
        : key === 'mehandi'
        ? [261.63, 329.63, 392.00] // C, E, G (Traditional Henna)
        : key === 'barat'
        ? [329.63, 415.30, 493.88] // E, G#, B (Festive Grandeur)
        : key === 'vidai'
        ? [220.00, 261.63, 329.63] // A, C, E (Emotional Melodic Minor)
        : [220.00, 277.18, 329.63]; // A, C#, E (Royal Shehnai Harmony)

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.12, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const oscs = freqs.map((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        gain.gain.setValueAtTime(0.35, ctx.currentTime);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        return osc;
      });

      synthOscsRef.current = oscs;
    } catch (err) {
      console.log('Synth fallback info:', err);
    }
  };

  const playCurrentTrack = () => {
    const audioUrl = trackMap[currentTrackKey] || trackMap.wedding;
    
    if (audioRef.current) {
      try {
        audioRef.current.pause();
      } catch (e) {}
    }

    const audio = new Audio();
    audio.src = audioUrl;
    audio.crossOrigin = "anonymous";
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          stopSynthFallback();
          // Smooth volume fade up to full clear audibility
          let vol = 0;
          const fadeInterval = setInterval(() => {
            vol += 0.08;
            if (vol >= 0.75) {
              audio.volume = 0.75;
              clearInterval(fadeInterval);
            } else {
              audio.volume = vol;
            }
          }, 50);
        })
        .catch((err) => {
          console.log('HTML5 Audio playback prevented by browser, switching to shehnai synth fallback:', err);
          setIsPlaying(true);
          startSynthFallback(currentTrackKey);
        });
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) audioRef.current.pause();
      stopSynthFallback();
      setIsPlaying(false);
      setIsMuted(true);
    } else {
      setIsMuted(false);
      playCurrentTrack();
    }
    if (onTogglePlay) onTogglePlay();
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-950/95 via-maroon-dark/95 to-amber-950/95 text-amber-200 border-2 border-amber-400/80 shadow-[0_0_20px_rgba(212,175,55,0.6)] backdrop-blur-md hover:scale-105 active:scale-95 transition-all group cursor-pointer"
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <div className="flex items-end gap-[3px] h-4">
              <span className="sound-bar" />
              <span className="sound-bar" />
              <span className="sound-bar" />
              <span className="sound-bar" />
            </div>
          ) : (
            <Music className="w-4 h-4 text-amber-300" />
          )}
        </div>

        <span className="text-xs font-serif tracking-wider font-bold text-gold-gradient">
          {isPlaying ? '♪ Music On' : 'Tap for Music'}
        </span>

        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-amber-300 opacity-90" />
        ) : (
          <VolumeX className="w-4 h-4 text-amber-400/60" />
        )}
      </button>
    </div>
  );
};
