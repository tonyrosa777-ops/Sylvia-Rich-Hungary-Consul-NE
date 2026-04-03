"use client";
import { useEffect, useRef } from "react";

/* ── Constants ─────────────────────────────────────────────────────────────────
   All coordinates are in 400×400 logical space.
   The shield is formed by 14 arcs from a SINGLE positive pole at top-center
   to a SINGLE negative pole at the bottom tip. Each arc spreads a different
   amount laterally — outer arcs wide (defining shield edges), inner arcs narrow
   (filling the interior). Never draws the outline explicitly.
────────────────────────────────────────────────────────────────────────────── */
const LINE_COUNT = 14;
const SEGMENTS   = 60;

// Single positive pole (top center) + single negative pole (bottom tip)
const POS_X = 200, POS_Y = 75;
const NEG_X = 200, NEG_Y = 355;

// Cubic bezier y control points — shared across all lines
const CP1_Y = 100;  // upper section: lines spread quickly right/left
const CP2_Y = 305;  // lower section: lines guide back toward center

// Colors
const GOLD  = "#C5A55A";
const CREAM = "#F5F0E8";

// Hungarian apostolic cross
const CROSS_CX = 200, CROSS_CY = 178;

// Reveal
const REVEAL_DURATION_MS = 700;
const REVEAL_STAGGER_MS  = 120;
const TOTAL_REVEAL_MS    = REVEAL_STAGGER_MS * (LINE_COUNT - 1) + REVEAL_DURATION_MS;
// = 120 × 13 + 700 = 2260ms

/* ── Line geometry ─────────────────────────────────────────────────────────────
   14 lines: 7 on the left (indices 0–6), 7 on the right (indices 7–13).
   localIdx 0 = innermost (barely spreads), 6 = outermost (defines shield edge).

   Cubic bezier control point x values per line:
     CP1 goes far lateral (forces rapid spread from top pole)
     CP2 goes less lateral (guides line back toward the tip)

   At t=0.5 (equatorial midpoint, y≈215), the outermost arc reaches x≈315
   — which is 115px from center, matching the intended shield half-width.
────────────────────────────────────────────────────────────────────────────── */
function lineControlPoints(i: number): { cp1x: number; cp2x: number } {
  const isRight  = i >= 7;
  const side     = isRight ? 1 : -1;
  // localIdx: 0 = innermost line on that side, 6 = outermost
  const localIdx = isRight ? i - 7 : 6 - i;
  const f        = (localIdx + 1) / 7; // 0.143 → 1.0

  return {
    cp1x: POS_X + side * f * 207, // outermost: ±207 from center (off-canvas OK)
    cp2x: POS_X + side * f * 100, // outermost: ±100 from center
  };
}

/* ── Opacity: inner lines brighter, outer lines dimmer ────────────────────── */
function lineOpacity(i: number): number {
  return 0.25 + 0.35 * (1 - Math.abs(i - 6.5) / 6.5);
}

/* ── Line width: inner lines slightly thicker ──────────────────────────────── */
function lineWidth(i: number): number {
  return 0.9 + 0.4 * (1 - Math.abs(i - 6.5) / 6.5);
}

/* ── Reveal order: center-outward ──────────────────────────────────────────── */
const REVEAL_ORDER: number[] = (() => {
  const o: number[] = [];
  o.push(6, 7);
  for (let offset = 2; offset <= 6; offset++) {
    o.push(6 - offset + 1, 6 + offset);
  }
  o.push(0, 13); // outermost pair — must be 2 elements
  return o;       // → [6,7,5,8,4,9,3,10,2,11,1,12,0,13]  (14 total)
})();

const REVEAL_POSITION = new Array<number>(LINE_COUNT).fill(0);
REVEAL_ORDER.forEach((li, pos) => { REVEAL_POSITION[li] = pos; });

/* ── Field line generation ──────────────────────────────────────────────────
   Cubic bezier parameterized by line index, with slight position jitter
   for an organic, engraved quality. Endpoints are fixed (no jitter at poles).
────────────────────────────────────────────────────────────────────────────── */
function generateFieldLine(i: number): Array<[number, number]> {
  const { cp1x, cp2x } = lineControlPoints(i);
  const pts: Array<[number, number]> = [];

  for (let seg = 0; seg <= SEGMENTS; seg++) {
    const t  = seg / SEGMENTS;
    const mt = 1 - t;

    // Cubic bezier formula
    const x = mt ** 3 * POS_X + 3 * mt ** 2 * t * cp1x + 3 * mt * t ** 2 * cp2x + t ** 3 * NEG_X;
    const y = mt ** 3 * POS_Y + 3 * mt ** 2 * t * CP1_Y + 3 * mt * t ** 2 * CP2_Y + t ** 3 * NEG_Y;

    // Position jitter — not at endpoints (arcs must meet exactly at the poles)
    const isEnd = seg === 0 || seg === SEGMENTS;
    const jx = isEnd ? 0 : (Math.random() - 0.5) * 7;  // ±3.5px raw, ~±1.5px after bezier smoothing
    const jy = isEnd ? 0 : (Math.random() - 0.5) * 3;  // ±1.5px raw

    pts.push([x + jx, y + jy]);
  }

  return pts;
}

/* ── Component ─────────────────────────────────────────────────────────────── */
export function MagneticSeal() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef  = useRef<Array<Array<[number, number]>>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let frame     = 0;
    let startTime = 0;

    /* ── init: DPR-aware canvas, 400×400 coordinate mapping, line generation ── */
    const init = () => {
      const dpr  = window.devicePixelRatio || 1;
      const logW = canvas.offsetWidth  || 320;
      const logH = canvas.offsetHeight || 360;

      canvas.width  = logW * dpr;
      canvas.height = logH * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset before rescaling
      ctx.scale((logW / 400) * dpr, (logH / 400) * dpr);

      linesRef.current = [];
      for (let i = 0; i < LINE_COUNT; i++) {
        linesRef.current.push(generateFieldLine(i));
      }
    };

    /* ── Hungarian apostolic double cross (ghost watermark) ── */
    const drawCross = (breathe: number) => {
      ctx.save();
      ctx.globalAlpha = 0.08 * breathe;
      ctx.strokeStyle = GOLD;
      ctx.lineWidth   = 1.5;
      ctx.lineCap     = "round";
      // Vertical bar
      ctx.beginPath(); ctx.moveTo(CROSS_CX, CROSS_CY - 20); ctx.lineTo(CROSS_CX, CROSS_CY + 20); ctx.stroke();
      // Upper horizontal (shorter)
      ctx.beginPath(); ctx.moveTo(CROSS_CX - 10, CROSS_CY - 10); ctx.lineTo(CROSS_CX + 10, CROSS_CY - 10); ctx.stroke();
      // Lower horizontal (longer)
      ctx.beginPath(); ctx.moveTo(CROSS_CX - 15, CROSS_CY + 4); ctx.lineTo(CROSS_CX + 15, CROSS_CY + 4); ctx.stroke();
      ctx.restore();
    };

    /* ── RAF tick ── */
    const tick = (timestamp: number) => {
      if (startTime === 0) startTime = timestamp;
      const elapsed = timestamp - startTime;
      frame++;

      ctx.clearRect(0, 0, 400, 400);

      // Y-axis pseudo-rotation — compresses x-coords toward center
      // 0.0002 rad/frame @ 60fps → barely perceptible moment-to-moment, full cycle ~8.7min
      const cosY = Math.cos(frame * 0.0002);
      const tx   = (x: number) => 200 + (x - 200) * cosY;

      const isRevealing = elapsed < TOTAL_REVEAL_MS;
      const breathe = isRevealing ? 1 : 0.85 + 0.15 * Math.sin(frame * 0.003);

      drawCross(breathe);

      // Shared vertical gradient (gold at top pole → cream at bottom tip)
      // Vertical gradient is unaffected by the Y-axis rotation
      const grad = ctx.createLinearGradient(200, POS_Y, 200, NEG_Y);
      grad.addColorStop(0, GOLD);
      grad.addColorStop(1, CREAM);

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

        ctx.save();
        ctx.globalAlpha = lineOpacity(i) * breathe;
        ctx.strokeStyle = grad;
        ctx.lineWidth   = lineWidth(i);
        ctx.lineCap     = "round";
        ctx.lineJoin    = "round";

        // Quadratic bezier midpoint smoothing — smooth curve through jittered points
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
