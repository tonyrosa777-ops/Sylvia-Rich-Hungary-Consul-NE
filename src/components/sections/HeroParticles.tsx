"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  opacity: number; targetOpacity: number;
  size: number;
  type: "mote" | "glimmer";
  glimmerAngle?: number;
  glimmerLife?: number;
  glimmerMaxLife?: number;
}

// Desktop (≥1024px): full density. Mobile: significantly lighter load.
const DESKTOP_BREAKPOINT = 1024;
const MOTE_COUNT_MOBILE  = 80;
const MOTE_COUNT_DESKTOP = 280;
const GLIMMER_INTERVAL_MOBILE  = 90;
const GLIMMER_INTERVAL_DESKTOP = 32;

/**
 * Subtle gold particle field — floating motes + brief glints.
 * Dignified, not pyrotechnic. Appropriate for a diplomatic institution.
 * Source: website-build-template.md §1 Animation 1 (adapted for brand)
 */
export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;
    let paused = false;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const isDesktop = () => window.innerWidth >= DESKTOP_BREAKPOINT;
    const moteCount = () => isDesktop() ? MOTE_COUNT_DESKTOP : MOTE_COUNT_MOBILE;
    const glimmerInterval = () => isDesktop() ? GLIMMER_INTERVAL_DESKTOP : GLIMMER_INTERVAL_MOBILE;

    const spawnMote = (): Particle => ({
      x: Math.random() * (canvas.width || 800),
      y: (canvas.height || 600) + Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(0.2 + Math.random() * 0.5),
      opacity: 0,
      targetOpacity: 0.15 + Math.random() * 0.35,
      size: 0.8 + Math.random() * 1.4,
      type: "mote",
    });

    const spawnGlimmer = (): Particle => ({
      x: 60 + Math.random() * ((canvas.width || 800) - 120),
      y: 60 + Math.random() * ((canvas.height || 600) * 0.7),
      vx: 0, vy: -0.1,
      opacity: 0, targetOpacity: 0.7,
      size: 3 + Math.random() * 3,
      type: "glimmer",
      glimmerAngle: 0,
      glimmerLife: 0,
      glimmerMaxLife: 40 + Math.random() * 30,
    });

    const init = () => {
      resize();
      particles.length = 0;
      for (let i = 0; i < moteCount(); i++) {
        const p = spawnMote();
        p.y = Math.random() * (canvas.height || 600);
        p.opacity = p.targetOpacity * Math.random();
        particles.push(p);
      }
    };

    const drawGlimmer = (p: Particle) => {
      if (!ctx) return;
      const maxLife = p.glimmerMaxLife ?? 50;
      const life = p.glimmerLife ?? 0;
      const progress = life / maxLife;
      const fade = progress < 0.3 ? progress / 0.3 : 1 - (progress - 0.3) / 0.7;
      const alpha = p.targetOpacity * fade;
      const s = p.size * (0.5 + fade * 0.5);

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 0.8;
      ctx.translate(p.x, p.y);

      // 4-point star
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * s * 2.5, Math.sin(angle) * s * 2.5);
        ctx.stroke();
      }
      ctx.fillStyle = "#D4AF37";
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const tick = () => {
      if (!ctx || !canvas || paused) {
        animId = requestAnimationFrame(tick);
        return;
      }

      frame++;

      // Throttle to ~30fps on mobile
      if (!isDesktop() && frame % 2 !== 0) {
        animId = requestAnimationFrame(tick);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % glimmerInterval() === 0) particles.push(spawnGlimmer());

      // Separate gold and cream motes to minimise fillStyle switches
      const goldMotes: Particle[] = [];
      const creamMotes: Particle[] = [];

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        if (p.type === "glimmer") {
          p.glimmerLife = (p.glimmerLife ?? 0) + 1;
          if ((p.glimmerLife ?? 0) >= (p.glimmerMaxLife ?? 50)) {
            particles.splice(i, 1);
            continue;
          }
          p.y += p.vy;
          drawGlimmer(p);
          continue;
        }

        // Mote physics
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += (p.targetOpacity - p.opacity) * 0.02;

        if (Math.random() < 0.004) {
          p.targetOpacity = 0.05 + Math.random() * 0.35;
        }

        if (p.y < -10) {
          particles[i] = spawnMote();
          continue;
        }

        if ((p.x + p.y) % 10 < 6) goldMotes.push(p);
        else creamMotes.push(p);
      }

      // Batch draw gold, then cream
      ctx.fillStyle = "#C5A55A";
      for (const p of goldMotes) {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "#F5F0E8";
      for (const p of creamMotes) {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(tick);
    };

    // Pause when tab is hidden
    const onVisibility = () => { paused = document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    init();
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
