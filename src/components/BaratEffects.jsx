import React, { useEffect, useRef } from 'react';

export const BaratEffects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Fireworks particles
    const particles = [];
    const colors = ['#f59e0b', '#ef4444', '#10b981', '#3b82f6', '#ec4899', '#fef08a'];

    const createFirework = (x, y) => {
      const particleCount = 25;
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const speed = Math.random() * 3 + 1.5;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          size: Math.random() * 3 + 2,
          decay: Math.random() * 0.02 + 0.015,
        });
      }
    };

    let timer = 0;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      timer++;

      // Periodically trigger firework burst
      if (timer % 80 === 0) {
        createFirework(
          Math.random() * (canvas.width * 0.8) + canvas.width * 0.1,
          Math.random() * (canvas.height * 0.4) + canvas.height * 0.1
        );
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03; // gravity
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = p.alpha;
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Animated Fairy Light Strings Header */}
      <div className="absolute top-0 left-0 right-0 h-12 flex justify-around items-center px-4 bg-gradient-to-b from-amber-500/20 to-transparent">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-4 rounded-full bg-amber-300 shadow-[0_0_12px_#fef08a] animate-pulse"
            style={{
              animationDuration: `${1 + (i % 3) * 0.4}s`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};
