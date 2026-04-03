"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  opacity: number; targetOpacity: number;
  size: number;
  type: "mote" | "glimmer";
  glimmerLife?: number;
  glimmerMaxLife?: number;
}

const DESKTOP_BREAKPOINT = 1024;
const MOTE_COUNT_MOBILE  = 60;
const MOTE_COUNT_DESKTOP = 120;
const GLIMMER_INTERVAL_MOBILE  = 100;
const GLIMMER_INTERVAL_DESKTOP = 50;

export function GlobalParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame = 0;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const spawnMote = (): Particle => ({
      x: Math.random() * (canvas.width || 800),
      y: (canvas.height || 600) + Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(0.2 + Math.random() * 0.4),
      opacity: 0,
      targetOpacity: 0.08 + Math.random() * 0.18,
      size: 0.6 + Math.random() * 1.2,
      type: "mote",
    });

    const spawnGlimmer = (): Particle => ({
      x: 60 + Math.random() * ((canvas.width || 800) - 120),
      y: 60 + Math.random() * ((canvas.height || 600) * 0.85),
      vx: 0, vy: -0.08,
      opacity: 0, targetOpacity: 0.45,
      size: 2.5 + Math.random() * 2.5,
      type: "glimmer",
      glimmerLife: 0,
      glimmerMaxLife: 45 + Math.random() * 30,
    });

    const isDesktop = () => window.innerWidth >= DESKTOP_BREAKPOINT;
    const moteCount = () => isDesktop() ? MOTE_COUNT_DESKTOP : MOTE_COUNT_MOBILE;
    const glimmerInterval = () => isDesktop() ? GLIMMER_INTERVAL_DESKTOP : GLIMMER_INTERVAL_MOBILE;

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
      const maxLife = p.glimmerMaxLife ?? 50;
      const life = p.glimmerLife ?? 0;
      const progress = life / maxLife;
      const fade = progress < 0.3 ? progress / 0.3 : 1 - (progress - 0.3) / 0.7;
      const alpha = p.targetOpacity * fade;
      const s = p.size * (0.5 + fade * 0.5);

      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = "#D4AF37";
      ctx.lineWidth = 0.7;
      ctx.translate(p.x, p.y);

      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * s * 2.2, Math.sin(angle) * s * 2.2);
        ctx.stroke();
      }
      ctx.fillStyle = "#D4AF37";
      ctx.beginPath();
      ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const tick = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      if (frame % glimmerInterval() === 0) {
        particles.push(spawnGlimmer());
      }

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

        p.x += p.vx;
        p.y += p.vy;
        p.opacity += (p.targetOpacity - p.opacity) * 0.02;

        if (Math.random() < 0.003) {
          p.targetOpacity = 0.04 + Math.random() * 0.18;
        }

        if (p.y < -10) {
          particles[i] = spawnMote();
          continue;
        }

        const gold = Math.random() < 0.6;
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = gold ? "#C5A55A" : "#F5F0E8";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(tick);
    };

    const ro = new ResizeObserver(init);
    ro.observe(canvas);

    init();
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
