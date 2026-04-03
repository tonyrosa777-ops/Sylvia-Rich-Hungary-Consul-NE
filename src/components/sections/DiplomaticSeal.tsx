"use client";
import { useEffect, useId, useRef } from "react";
import { gsap } from "gsap";

/* ── Color helpers ─────────────────────────────────────────────────────────
   Stroke gradient: deep indigo #1a1040 → gold #C5A55A → cream #F5F0E8@0
   Based on Ink Diffusion variation from animation-inspiration.md
───────────────────────────────────────────────────────────────────────── */
function _lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function strokeColor(t: number): string {
  if (t <= 0.5) {
    const s = t * 2;
    return `rgb(${Math.round(_lerp(26, 197, s))},${Math.round(_lerp(16, 165, s))},${Math.round(_lerp(64, 90, s))})`;
  }
  const s = (t - 0.5) * 2;
  const alpha = (1 - s).toFixed(3);
  return `rgba(${Math.round(_lerp(197, 245, s))},${Math.round(_lerp(165, 240, s))},${Math.round(_lerp(90, 232, s))},${alpha})`;
}

/* ── Ink stroke ─────────────────────────────────────────────────────────────
   createInkStroke() from animation-inspiration.md Variation 10 — Ink Diffusion:
   speed = (1 - t)² eases strokes to near-zero at tips;
   jitter increases with distance for organic pool-then-reach behaviour.
───────────────────────────────────────────────────────────────────────── */
interface Stroke {
  pts: [number, number][];
  born: number;
}

function mkStroke(): Stroke {
  const ox = 200 + (Math.random() - 0.5) * 4;
  const oy = 200 + (Math.random() - 0.5) * 4;
  const angle = Math.random() * Math.PI * 2;
  let dx = Math.cos(angle);
  let dy = Math.sin(angle);
  const maxLen = 85 + Math.random() * 55; // 85–140 px total reach
  const segs = 20;
  const jitter = 0.2;
  const pts: [number, number][] = [[ox, oy]];
  let px = ox, py = oy;
  for (let i = 0; i < segs; i++) {
    const t = i / segs;
    const speed = (1 - t) ** 2; // eases to near-zero at tip
    dx += (Math.random() - 0.5) * jitter * (1 + t * 2);
    dy += (Math.random() - 0.5) * jitter * (1 + t * 2);
    const mag = Math.hypot(dx, dy) || 1;
    dx /= mag;
    dy /= mag;
    px += dx * (maxLen / segs) * speed;
    py += dy * (maxLen / segs) * speed;
    pts.push([px, py]);
  }
  return { pts, born: performance.now() };
}

function drawStroke(ctx: CanvasRenderingContext2D, s: Stroke, alpha: number) {
  if (s.pts.length < 2 || alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.lineWidth = 1.5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  for (let i = 0; i < s.pts.length - 1; i++) {
    const t0 = i / (s.pts.length - 1);
    const t1 = (i + 1) / (s.pts.length - 1);
    const g = ctx.createLinearGradient(
      s.pts[i][0], s.pts[i][1],
      s.pts[i + 1][0], s.pts[i + 1][1]
    );
    g.addColorStop(0, strokeColor(t0));
    g.addColorStop(1, strokeColor(t1));
    ctx.beginPath();
    ctx.moveTo(s.pts[i][0], s.pts[i][1]);
    ctx.lineTo(s.pts[i + 1][0], s.pts[i + 1][1]);
    ctx.strokeStyle = g;
    ctx.stroke();
  }
  ctx.restore();
}

/* Stroke lifecycle: fade-in 400ms → hold 4000ms → fade-out 2000ms → remove */
const FI = 400, HOLD = 4000, FO = 2000, LIFE = FI + HOLD + FO;

function strokeOpacity(age: number): number {
  if (age < FI)           return age / FI;
  if (age < FI + HOLD)    return 1;
  if (age < LIFE)         return 1 - (age - FI - HOLD) / FO;
  return -1; // signal removal
}

/* ── Component ─────────────────────────────────────────────────────────────
   Animation phases (from spec):
   Phase 1 — Ink Accumulation  0ms → 3000ms (strokes spawn every 150ms)
   Phase 2 — Ring Reveal       3000ms (strokeDashoffset draw-on, 800ms)
   Phase 3 — Orbital Text      3800ms (opacity fade, 600ms)
   Phase 4 — Permanent Idle    4500ms → ∞ (continuous strokes + slow rotation)
   Hover   — faster spawning (75ms) + ring/text brightness
───────────────────────────────────────────────────────────────────────── */
export function DiplomaticSeal() {
  // Unique ID per instance — prevents id collisions if component is used twice
  const uid    = useId().replace(/:/g, "");
  const pathId = `text-orbit-${uid}`;

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const svgRef       = useRef<SVGSVGElement>(null);
  const ringRef      = useRef<SVGCircleElement>(null);
  const textRef      = useRef<SVGTextElement>(null);

  const rafRef    = useRef<number>(0);
  const strokes   = useRef<Stroke[]>([]);
  const paused    = useRef(false);
  const hovered   = useRef(false);
  const lastSpawn = useRef(0);

  useEffect(() => {
    const container = containerRef.current!;
    const canvas    = canvasRef.current!;
    const svg       = svgRef.current!;
    const ring      = ringRef.current!;
    const textEl    = textRef.current!;
    const ctx       = canvas.getContext("2d")!;

    /* DPR-aware canvas — sharp on retina displays */
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = 400 * dpr;
    canvas.height = 400 * dpr;
    ctx.scale(dpr, dpr);

    /* ── RAF loop — ink strokes ───────────────────────────────────────── */
    function tick(now: number) {
      if (!paused.current) {
        const interval = hovered.current ? 75 : 150;
        ctx.clearRect(0, 0, 400, 400);

        if (now - lastSpawn.current > interval) {
          if (strokes.current.length >= 40) strokes.current.shift();
          strokes.current.push(mkStroke());
          lastSpawn.current = now;
        }

        strokes.current = strokes.current.filter((s) => {
          const op = strokeOpacity(now - s.born);
          if (op < 0) return false;
          drawStroke(ctx, s, op);
          return true;
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    /* ── GSAP — ring + text reveals (reference: Aurelius in animated-logo-inspiration.md) */
    const circ = 2 * Math.PI * 140; // r=140, circumference ≈ 879.6

    // Initial hidden state
    gsap.set(ring,   { strokeDasharray: circ, strokeDashoffset: circ, opacity: 0 });
    gsap.set(textEl, { opacity: 0 });

    // Phase 2 — ring draws on clockwise via strokeDashoffset (3s)
    gsap.to(ring, {
      strokeDashoffset: 0,
      opacity: 0.85,
      duration: 0.8,
      ease: "power2.inOut",
      delay: 3.0,
    });

    // Phase 3 — orbital text engraves in (3.8s)
    gsap.to(textEl, {
      opacity: 0.72,
      duration: 0.7,
      ease: "power1.in",
      delay: 3.8,
    });

    // Phase 4 — slow SVG rotation, keeps the seal alive indefinitely (4.5s)
    gsap.to(svg, {
      rotation: 360,
      transformOrigin: "50% 50%",
      duration: 120,
      repeat: -1,
      ease: "none",
      delay: 4.5,
    });

    /* ── Hover — brighter ring + text, faster stroke spawn ─────────────── */
    let revealed = false;
    const revealTimer = setTimeout(() => { revealed = true; }, 3200);

    function onEnter() {
      hovered.current = true;
      if (!revealed) return;
      gsap.to(ring,   { opacity: 1,    duration: 0.3 });
      gsap.to(textEl, { opacity: 1,    duration: 0.3 });
    }
    function onLeave() {
      hovered.current = false;
      if (!revealed) return;
      gsap.to(ring,   { opacity: 0.85, duration: 0.6 });
      gsap.to(textEl, { opacity: 0.72, duration: 0.6 });
    }
    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    /* ── Viewport — pause RAF when hero scrolls out of view ─────────────── */
    const io = new IntersectionObserver(
      ([e]) => { paused.current = !e.isIntersecting; },
      { threshold: 0.1 }
    );
    io.observe(container);

    return () => {
      cancelAnimationFrame(rafRef.current);
      io.disconnect();
      clearTimeout(revealTimer);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf([ring, textEl, svg]);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="seal-animation-container relative w-[280px] h-[280px] lg:w-[400px] lg:h-[400px] mx-auto select-none"
      aria-hidden="true"
    >
      {/* Canvas layer — ink diffusion strokes (Canvas 2D API) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/*
        SVG overlay — gold ring + orbital text.
        The entire SVG rotates slowly in Phase 4 idle (GSAP rotation on svg element).
        The textPath path is inside the SVG so it rotates with the ring and text together.

        Path geometry:
          M 108,292 A 130,130 0 1,0 292,292
          270° CCW arc through the top of the circle (r=130, center 200,200).
          At the 12 o'clock position the path travels rightward → text reads L-to-R.
          Text appears between r=130 (path) and r=140 (ring), inside the gold ring.
          startOffset 50% + textAnchor middle centres the text at the top.
          textLength 613 stretches letters to fill the full 270° arc evenly.
      */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <path id={pathId} d="M 108,292 A 130,130 0 1,0 292,292" />
        </defs>

        {/* Gold ring — drawn on via strokeDashoffset in Phase 2 */}
        <circle
          ref={ringRef}
          cx="200"
          cy="200"
          r="140"
          stroke="#C5A55A"
          strokeWidth="1.5"
        />

        {/* Orbital text — fades in via opacity in Phase 3 */}
        <text
          ref={textRef}
          className="font-display"
          fontSize="9.5"
          fill="#F5F0E8"
          letterSpacing="2"
        >
          <textPath
            href={`#${pathId}`}
            startOffset="50%"
            textAnchor="middle"
            textLength="613"
          >
            HONORARY CONSULATE · HUNGARY · NEW ENGLAND ·
          </textPath>
        </text>
      </svg>
    </div>
  );
}
