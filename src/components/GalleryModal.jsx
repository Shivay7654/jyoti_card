import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const GalleryModal = ({ isOpen, onClose, images, eventTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !images || images.length === 0) return null;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      {/* Modal Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2.5 rounded-full bg-amber-950/80 text-amber-200 border border-amber-400/40 hover:bg-amber-900 transition-colors z-50 active:scale-95"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="w-full max-w-lg bg-black/80 rounded-3xl border border-amber-400/40 p-4 relative overflow-hidden flex flex-col items-center">
        <h4 className="text-xl font-serif font-semibold text-gold-gradient mb-3 text-center">
          {eventTitle} Gallery
        </h4>

        {/* Main Image Display */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-amber-500/30">
          <img
            src={images[currentIndex]}
            alt={`${eventTitle} memory ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Nav buttons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-amber-200 border border-amber-400/30 hover:bg-black/80"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-amber-200 border border-amber-400/30 hover:bg-black/80"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 overflow-x-auto max-w-full pb-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                  currentIndex === idx
                    ? 'border-amber-400 scale-105 shadow-gold-glow'
                    : 'border-transparent opacity-60'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
