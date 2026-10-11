import React, { useState } from 'react';
import { WeddingCover } from './pages/WeddingCover';
import { WelcomePage } from './pages/WelcomePage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { CurtainTransition } from './components/CurtainTransition';
import { MusicPlayer } from './components/MusicPlayer';
import { FloatingPetals } from './components/FloatingPetals';

export default function App() {
  // Navigation State
  // 'cover' | 'welcome' | 'events' | 'detail'
  const [currentPage, setCurrentPage] = useState('cover');
  const [selectedEventId, setSelectedEventId] = useState(null);

  // Transition & Audio State
  const [isCurtainOpen, setIsCurtainOpen] = useState(true);
  const [targetPage, setTargetPage] = useState(null);
  const [targetEventId, setTargetEventId] = useState(null);
  const [isUserInteracted, setIsUserInteracted] = useState(false);

  // Trigger curtain navigation sequence
  const navigateWithCurtain = (newPage, newEventId = null) => {
    setIsUserInteracted(true);
    setTargetPage(newPage);
    setTargetEventId(newEventId);
    // Close curtains
    setIsCurtainOpen(false);
  };

  // Called when curtain animation completes closing
  const handleCurtainClosed = () => {
    if (targetPage) {
      setCurrentPage(targetPage);
      setSelectedEventId(targetEventId);
      setTargetPage(null);
      setTargetEventId(null);
      // Open curtains to reveal new page
      setTimeout(() => {
        setIsCurtainOpen(true);
      }, 100);
    }
  };

  // Determine current active audio track
  const currentMusicKey = currentPage === 'detail' && selectedEventId
    ? selectedEventId
    : 'wedding';

  return (
    <div className="min-h-screen bg-[#0d0103] text-[#fdfbf7] flex items-center justify-center font-sans relative overflow-x-hidden">
      {/* Desktop Background Atmosphere Frame */}
      <div className="fixed inset-0 pointer-events-none z-0 hidden md:block">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#4a050f] via-[#1a0104] to-[#080001] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[900px] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Main Mobile App Container (360px - 430px+ optimized, 100% full screen on mobile, phone canvas on desktop) */}
      <div className="w-full max-w-[440px] min-h-screen-ios h-screen md:h-[90vh] md:max-h-[920px] md:rounded-[44px] md:border-[8px] md:border-amber-400/50 md:shadow-[0_0_60px_rgba(212,175,55,0.3)] bg-[#120205] relative overflow-hidden flex flex-col z-10">
        
        {/* Global Floating Marigold & Rose Petals */}
        <FloatingPetals count={currentPage === 'cover' ? 22 : 12} />

        {/* Dynamic Page Rendering */}
        <div className="w-full h-full relative z-10 flex flex-col overflow-y-auto">
          {currentPage === 'cover' && (
            <WeddingCover
              onOpenInvitation={() => navigateWithCurtain('welcome')}
            />
          )}

          {currentPage === 'welcome' && (
            <WelcomePage
              onViewEvents={() => navigateWithCurtain('events')}
            />
          )}

          {currentPage === 'events' && (
            <EventsPage
              onSelectEvent={(eventId) => navigateWithCurtain('detail', eventId)}
              onBackToWelcome={() => navigateWithCurtain('cover')}
            />
          )}

          {currentPage === 'detail' && selectedEventId && (
            <EventDetailPage
              eventId={selectedEventId}
              onBackToEvents={() => navigateWithCurtain('events')}
            />
          )}
        </div>

        {/* Curtain Transition overlay */}
        <CurtainTransition
          isOpen={isCurtainOpen}
          onAnimationComplete={handleCurtainClosed}
        />

        {/* Global Music Control Widget */}
        <MusicPlayer
          currentTrackKey={currentMusicKey}
          isUserInteracted={isUserInteracted}
          onTogglePlay={() => setIsUserInteracted(true)}
        />
      </div>
    </div>
  );
}
