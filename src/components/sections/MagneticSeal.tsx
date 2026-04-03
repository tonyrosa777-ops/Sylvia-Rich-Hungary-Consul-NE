"use client";
import { useEffect, useRef } from "react";

/* ── Constants ────────────────────────────────────────────────────────────────
   All coordinates are in 400×400 logical space.
   Canvas is DPR-scaled and proportionally mapped to the container at runtime.
────────────────────────────────────────────────────────────────────────────── */
const LINE_COUNT = 14;
const SEGMENTS   = 60;    // control points per field line — higher = smoother
const JITTER     = 0.12;  // very smooth (spec: 0.12)

const NEG_POLE_X = 200;
const NEG_POLE_Y = 355;   // shield bottom tip

// Hungarian apostolic double cross — ghost watermark
const CROSS_CX = 200;
const CROSS_CY = 175;

// Colors
const GOLD  = "#C5A55A";
const CREAM = "#F5F0E8";

// Reveal timing
const REVEAL_DURATION_MS = 700;
const REVEAL_STAGGER_MS  = 120;
const TOTAL_REVEAL_MS    = REVEAL_STAGGER_MS * (LINE_COUNT - 1) + REVEAL_DURATION_MS;
// 120 × 13 + 700 = 2260ms

/* ── Positive poles — evenly spaced along the top of the shield ── */
function posPole(i: number): [number, number] {
  return [85 + i * (230 / 13), 75];
}

/* ── Opacity per line: 0.25 at outer edges, ~0.57–0.60 at center ── */
function lineBaseOpacity(i: number): number {
  return 0.25 + 0.35 * (1 - Math.abs(i - 6.5) / 6.5);
}

/* ── Reveal order: center-outward ────────────────────────────────────────────
   [6, 7, 5, 8, 4, 9, 3, 10, 2, 11, 1, 12, 0, 13]
   Center lines (6, 7) appear first; outer edges (0, 13) last.
────────────────────────────────────────────────────────────────────────────── */
const REVEAL_ORDER: number[] = (() => {
  const order: number[] = [];
  const center = 6;
  order.push(center, center + 1);
  for (let offset = 2; offset <= center; offset++) {
    order.push(center - offset + 1, center + offset);
  }
  order.push(0, 13); // both outermost edges — must be 2 elements here
  return order;
})();

// Inverted index: REVEAL_POSITION[lineIdx] = stagger position (0 = first to appear)
const REVEAL_POSITION: number[] = new Array(LINE_COUNT).fill(0);
REVEAL_ORDER.forEach((lineIdx, pos) => { REVEAL_POSITION[lineIdx] = pos; });

/* ── Field line generation ────────────────────────────────────────────────────
   Adapts Variation 5 (Magnetic Field Lines) from animation-inspiration.md to 2D.
   Key lerp:  toNeg.lerp(jitter, 1-t)  →  toNeg*t + jitter*(1-t)
   At t=0: mostly jitter (wanders freely near positive pole)
   At t=1: mostly attracted to negative pole (converges at shield tip)
────────────────────────────────────────────────────────────────────────────── */
function generateFieldLine(poleX: number, poleY: number): Array<[number, number]> {
  const pts: Array<[number, number]> = [[poleX, poleY]];
  let cx = poleX;
  let cy = poleY;

  const totalDist = Math.sqrt(
    (NEG_POLE_X - poleX) ** 2 + (NEG_POLE_Y - poleY) ** 2
  );
  const stepSize = totalDist / SEGMENTS;

  for (let i = 0; i < SEGMENTS; i++) {
    const t = i / SEGMENTS;

    // Direction toward negative pole (normalized)
    const dx = NEG_POLE_X - cx;
    const dy = NEG_POLE_Y - cy;
    const dist = Math.sqrt(dx * dx + dy * dy) || 1;
    const toNegX = dx / dist;
    const toNegY = dy / dist;

    // Jitter vector
    const jx = (Math.random() - 0.5) * JITTER;
    const jy = (Math.random() - 0.5) * JITTER;

    // Lerp: attraction strengthens as t increases (matches Three.js reference)
    const stepX = toNegX * t + jx * (1 - t);
    const stepY = toNegY * t + jy * (1 - t);

    // Normalize and advance
    const stepLen = Math.sqrt(stepX * stepX + stepY * stepY) || 1;
    cx += (stepX / stepLen) * stepSize;
    cy += (stepY / stepLen) * stepSize;
    pts.push([cx, cy]);
  }

  // Ensure arc terminates exactly at the negative pole
  pts.push([NEG_POLE_X, NEG_POLE_Y]);
  return pts;
}

/* ── Component ────────────────────────────────────────────────────────────── */
export function MagneticSeal() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const linesRef   = useRef<Array<Array<[number, number]>>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame     = 0;
    let startTime = 0;

    /* ── init: DPR-aware setup, coordinate mapping, line generation ── */
    const init = () => {
      const dpr  = window.devicePixelRatio || 1;
      const logW = canvas.offsetWidth  || 320;
      const logH = canvas.offsetHeight || 360;

      canvas.width  = logW * dpr;
      canvas.height = logH * dpr;

      // Reset transform before rescaling — prevents stacked transforms on resize
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      // Map 400×400 logical coordinate space to the container, then DPR
      ctx.scale((logW / 400) * dpr, (logH / 400) * dpr);

      // Regenerate field lines (new random jitter each init)
      linesRef.current = [];
      for (let i = 0; i < LINE_COUNT; i++) {
        const [px, py] = posPole(i);
        linesRef.current.push(generateFieldLine(px, py));
      }
    };

    /* ── drawCross: Hungarian apostolic double cross (ghost watermark) ── */
    const drawCross = (breathe: number) => {
      ctx.save();
      ctx.globalAlpha = 0.08 * breathe;
      ctx.strokeStyle = GOLD;
      ctx.lineWidth   = 1.5;
      ctx.lineCap     = "round";

      // Vertical bar
      ctx.beginPath();
      ctx.moveTo(CROSS_CX, CROSS_CY - 20);
      ctx.lineTo(CROSS_CX, CROSS_CY + 20);
      ctx.stroke();

      // Upper horizontal bar (shorter — 10px each side)
      ctx.beginPath();
      ctx.moveTo(CROSS_CX - 10, CROSS_CY - 10);
      ctx.lineTo(CROSS_CX + 10, CROSS_CY - 10);
      ctx.stroke();

      // Lower horizontal bar (longer — 15px each side)
      ctx.beginPath();
      ctx.moveTo(CROSS_CX - 15, CROSS_CY + 5);
      ctx.lineTo(CROSS_CX + 15, CROSS_CY + 5);
      ctx.stroke();

      ctx.restore();
    };

    /* ── RAF tick ── */
    const tick = (timestamp: number) => {
      if (startTime === 0) startTime = timestamp;
      const elapsed = timestamp - startTime;
      frame++;

      // Clear in logical coordinate space (400×400 — correct with scaled transform)
      ctx.clearRect(0, 0, 400, 400);

      // Y-axis pseudo-rotation — compress x-coords toward center
      // 0.0002 rad/frame @ 60fps → one full "rotation" cycle every ~8.7 minutes
      const cosY = Math.cos(frame * 0.0002);
      const tx   = (x: number) => 200 + (x - 200) * cosY;

      const isRevealing = elapsed < TOTAL_REVEAL_MS;

      // Breathing opacity — ~35s period, starts after reveal completes
      const breathe = isRevealing
        ? 1
        : 0.85 + 0.15 * Math.sin(frame * 0.003);

      // Ghost cross — always present (barely perceptible)
      drawCross(breathe);

      // Draw each field line
      for (let i = 0; i < LINE_COUNT; i++) {
        const pts = linesRef.current[i];
        if (!pts || pts.length < 2) continue;

        // Reveal progress for this line
        const lineDelay   = REVEAL_POSITION[i] * REVEAL_STAGGER_MS;
        const lineElapsed = elapsed - lineDelay;
        const progress    = isRevealing
          ? Math.min(1, Math.max(0, lineElapsed / REVEAL_DURATION_MS))
          : 1;

        const numPts = Math.max(2, Math.floor((pts.length - 1) * progress) + 1);
        if (numPts < 2) continue;

        const baseOpacity = lineBaseOpacity(i) * breathe;

        // Gradient recomputed each frame — endpoints shift with cosY rotation
        const p0 = pts[0];
        const pN = pts[pts.length - 1];
        const grad = ctx.createLinearGradient(tx(p0[0]), p0[1], tx(pN[0]), pN[1]);
        grad.addColorStop(0, GOLD);
        grad.addColorStop(1, CREAM);

        ctx.save();
        ctx.globalAlpha = baseOpacity;
        ctx.strokeStyle = grad;
        ctx.lineWidth   = i >= 5 && i <= 8 ? 1.3 : 1.0; // center lines slightly thicker
        ctx.lineCap     = "round";
        ctx.lineJoin    = "round";

        // Quadratic bezier midpoint smoothing through jittered control points
        ctx.beginPath();
        ctx.moveTo(tx(pts[0][0]), pts[0][1]);
        for (let j = 1; j < numPts - 1; j++) {
          const xc = tx((pts[j][0] + pts[j + 1][0]) / 2);
          const yc = (pts[j][1] + pts[j + 1][1]) / 2;
          ctx.quadraticCurveTo(tx(pts[j][0]), pts[j][1], xc, yc);
        }
        ctx.lineTo(tx(pts[numPts - 1][0]), pts[numPts - 1][1]);
        ctx.stroke();
        ctx.restore();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(tick);
    };

    /* ── ResizeObserver ── */
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
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
