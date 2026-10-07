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

      // Base frequencies corresponding to Indian Raag ambient drone harmonies
      const freqs = key === 'haldi' 
        ? [293.66, 369.99, 440.00] // D, F#, A (Bright Yellow Joy)
        : key === 'mehandi'
        ? [261.63, 329.63, 392.00] // C, E, G
        : key === 'barat'
        ? [329.63, 415.30, 493.88] // E, G#, B (Festive Grandeur)
        : key === 'vidai'
        ? [220.00, 261.63, 329.63] // A, C, E (Emotional Melodic Minor)
        : [220.00, 277.18, 329.63]; // A, C#, E (Royal Traditional Wedding Shehnai Chord)

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.08, ctx.currentTime);
      masterGain.connect(ctx.destination);

      const oscs = freqs.map((f, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = i === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(f, ctx.currentTime);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
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
      audioRef.current.pause();
    }

    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          stopSynthFallback();
          // Smooth volume fade up
          let vol = 0;
          const fadeInterval = setInterval(() => {
            vol += 0.05;
            if (vol >= 0.6) {
              audio.volume = 0.6;
              clearInterval(fadeInterval);
            } else {
              audio.volume = vol;
            }
          }, 60);
        })
        .catch((err) => {
          console.log('Audio file play prevented, using shehnai synth drone fallback:', err);
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
    } else {
      playCurrentTrack();
    }
    if (onTogglePlay) onTogglePlay();
  };

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        onClick={togglePlay}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-gradient-to-r from-amber-950/90 via-maroon-dark/90 to-amber-950/90 text-amber-200 border border-amber-400/60 shadow-gold-glow backdrop-blur-md hover:scale-105 active:scale-95 transition-all group"
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

        <span className="text-xs font-serif tracking-wider font-semibold text-gold-gradient">
          {isPlaying ? '♪ Music On' : 'Music Off'}
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-amber-300 opacity-80" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-amber-400/60" />
        )}
      </button>
    </div>
  );
};
