'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  phase: number;
  driftX: number;
  driftY: number;
  radius: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const createParticles = (width: number, height: number) => {
  const isMobile = width < 768;
  const area = width * height;
  const count = isMobile
    ? clamp(Math.floor(area / 24000), 34, 72)
    : clamp(Math.floor(area / 17000), 46, 120);

  return Array.from({ length: count }, () => {
    const x = Math.random() * width;
    const y = Math.random() * height;
    return {
      x,
      y,
      baseX: x,
      baseY: y,
      vx: 0,
      vy: 0,
      phase: Math.random() * Math.PI * 2,
      driftX: 16 + Math.random() * 24,
      driftY: 16 + Math.random() * 24,
      radius: 0.8 + Math.random() * 1.3,
    } satisfies Particle;
  });
};

export const DynamicBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    let particles = createParticles(width, height);

    const pointer = {
      x: width / 2,
      y: height / 2,
      active: false,
      radius: isTouchDevice ? 140 : 190,
    };

    const applyCanvasScale = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      particles = createParticles(width, height);
      pointer.x = width / 2;
      pointer.y = height / 2;
      applyCanvasScale();
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.active = true;
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };

    const handlePointerOut = () => {
      pointer.active = false;
    };

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        lastFrameTime = performance.now();
      }
    };

    const getIsDarkMode = () => document.documentElement.classList.contains('dark');

    applyCanvasScale();

    let raf = 0;
    let lastFrameTime = performance.now();
    const targetFps = isTouchDevice ? 42 : 60;
    const frameInterval = 1000 / targetFps;

    const tick = (time: number) => {
      const elapsed = time - lastFrameTime;
      if (elapsed < frameInterval) {
        raf = window.requestAnimationFrame(tick);
        return;
      }
      lastFrameTime = time;

      if (document.hidden) {
        raf = window.requestAnimationFrame(tick);
        return;
      }

      const isDarkMode = getIsDarkMode();
      const lineRgb = isDarkMode ? '125, 211, 252' : '59, 130, 246';
      const dotRgb = isDarkMode ? '191, 219, 254' : '37, 99, 235';
      const glowRgb = isDarkMode ? '56, 189, 248' : '79, 70, 229';

      context.clearRect(0, 0, width, height);

      if (pointer.active && !prefersReducedMotion) {
        const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 260);
        glow.addColorStop(0, `rgba(${glowRgb}, 0.15)`);
        glow.addColorStop(0.35, `rgba(${glowRgb}, 0.07)`);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        context.fillStyle = glow;
        context.fillRect(0, 0, width, height);
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        const driftTargetX = particle.baseX + Math.cos(time * 0.0002 + particle.phase) * particle.driftX;
        const driftTargetY = particle.baseY + Math.sin(time * 0.00024 + particle.phase) * particle.driftY;

        particle.vx += (driftTargetX - particle.x) * 0.005;
        particle.vy += (driftTargetY - particle.y) * 0.005;

        if (pointer.active && !prefersReducedMotion) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy) || 1;

          if (distance < pointer.radius) {
            const force = (1 - distance / pointer.radius) * 0.7;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        particle.vx *= 0.92;
        particle.vy *= 0.92;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -40) particle.x = width + 40;
        if (particle.x > width + 40) particle.x = -40;
        if (particle.y < -40) particle.y = height + 40;
        if (particle.y > height + 40) particle.y = -40;
      }

      const connectDistance = isTouchDevice ? 118 : 150;
      const connectDistanceSquared = connectDistance * connectDistance;

      for (let first = 0; first < particles.length; first += 1) {
        const particleA = particles[first];

        for (let second = first + 1; second < particles.length; second += 1) {
          const particleB = particles[second];
          const dx = particleA.x - particleB.x;
          const dy = particleA.y - particleB.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared > connectDistanceSquared) continue;

          const distance = Math.sqrt(distanceSquared);

          const baseAlpha = (1 - distance / connectDistance) * 0.3;

          let mouseBoost = 0;
          if (pointer.active && !prefersReducedMotion) {
            const nearA = Math.hypot(particleA.x - pointer.x, particleA.y - pointer.y);
            const nearB = Math.hypot(particleB.x - pointer.x, particleB.y - pointer.y);
            const nearest = Math.min(nearA, nearB);
            if (nearest < pointer.radius * 1.2) {
              mouseBoost = (1 - nearest / (pointer.radius * 1.2)) * 0.55;
            }
          }

          const alpha = clamp(baseAlpha + mouseBoost, 0, 0.65);
          const lineWidth = mouseBoost > 0 ? 1.05 : 0.65;

          context.beginPath();
          context.moveTo(particleA.x, particleA.y);
          context.lineTo(particleB.x, particleB.y);
          context.lineWidth = lineWidth;
          context.strokeStyle = `rgba(${lineRgb}, ${alpha})`;
          context.stroke();
        }
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        let highlight = 0;
        if (pointer.active && !prefersReducedMotion) {
          const distanceToPointer = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
          if (distanceToPointer < pointer.radius * 0.9) {
            highlight = (1 - distanceToPointer / (pointer.radius * 0.9)) * 0.7;
          }
        }

        context.beginPath();
        context.arc(
          particle.x,
          particle.y,
          particle.radius + highlight * 0.8,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `rgba(${dotRgb}, ${0.48 + highlight * 0.48})`;
        context.fill();
      }

      raf = window.requestAnimationFrame(tick);
    };

    raf = window.requestAnimationFrame(tick);

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerout', handlePointerOut, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerout', handlePointerOut);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/20 dark:to-slate-950/30" />
    </div>
  );
};
