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

const MOTE_COUNT = 160;
const GLIMMER_INTERVAL = 65; // frames between glimmer spawns

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
      for (let i = 0; i < MOTE_COUNT; i++) {
        const p = spawnMote();
        p.y = Math.random() * (canvas.height || 600); // scatter on init
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
      // Center dot
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

      // Spawn glimmer occasionally
      if (frame % GLIMMER_INTERVAL === 0) {
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

        // Mote
        p.x += p.vx;
        p.y += p.vy;
        p.opacity += (p.targetOpacity - p.opacity) * 0.02;

        // Gentle twinkle
        if (Math.random() < 0.004) {
          p.targetOpacity = 0.05 + Math.random() * 0.35;
        }

        // Recycle when offscreen
        if (p.y < -10) {
          const fresh = spawnMote();
          particles[i] = fresh;
          continue;
        }

        // Gold/cream palette
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

    const ro = new ResizeObserver(resize);
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
