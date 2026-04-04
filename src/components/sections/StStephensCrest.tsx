"use client";
import { motion } from "framer-motion";

// ─── Leaf / berry data ────────────────────────────────────────────────────────
interface Leaf { x: number; y: number; r: number; s: number }

const OAK_D =
  "M0,-7 C1.5,-7.5 4,-6 3.5,-3.5 C5,-3 5.5,-1.5 4.5,-0.5 " +
  "C5.5,0.5 5,2.5 3.5,3.5 C2.5,4.5 1,5.5 0,7 " +
  "C-1,5.5 -2.5,4.5 -3.5,3.5 C-5,2.5 -5.5,0.5 -4.5,-0.5 " +
  "C-5.5,-1.5 -5,-3 -3.5,-3.5 C-4,-6 -1.5,-7.5 0,-7 Z";

const LAUREL_D =
  "M0,-7 C2,-7 3.5,-4 3.5,0 C3.5,4 2,7 0,7 C-2,7 -3.5,4 -3.5,0 C-3.5,-4 -2,-7 0,-7 Z";

const OAK_LEAVES: Leaf[] = [
  { x:  50, y: 183, r: -22, s: 1.20 },
  { x:  38, y: 177, r:  15, s: 1.15 },
  { x:  31, y: 170, r: -32, s: 1.10 },
  { x:  25, y: 160, r:  22, s: 1.10 },
  { x:  20, y: 149, r: -28, s: 1.00 },
  { x:  18, y: 137, r:  20, s: 0.95 },
  { x:  18, y: 125, r: -25, s: 0.90 },
  { x:  20, y: 113, r:  20, s: 0.85 },
  { x:  24, y: 102, r: -22, s: 0.80 },
  { x:  28, y:  93, r:  15, s: 0.75 },
  { x:  46, y: 192, r:   8, s: 1.10 },
  { x:  35, y: 164, r: -12, s: 1.00 },
  { x:  24, y: 143, r:  12, s: 0.88 },
  { x:  21, y: 120, r: -10, s: 0.78 },
];

const LAUREL_LEAVES: Leaf[] = [
  { x: 150, y: 183, r:  22, s: 1.20 },
  { x: 162, y: 177, r: -15, s: 1.15 },
  { x: 169, y: 170, r:  32, s: 1.10 },
  { x: 175, y: 160, r: -22, s: 1.10 },
  { x: 180, y: 149, r:  28, s: 1.00 },
  { x: 182, y: 137, r: -20, s: 0.95 },
  { x: 182, y: 125, r:  25, s: 0.90 },
  { x: 180, y: 113, r: -20, s: 0.85 },
  { x: 176, y: 102, r:  22, s: 0.80 },
  { x: 172, y:  93, r: -15, s: 0.75 },
  { x: 154, y: 192, r:  -8, s: 1.10 },
  { x: 165, y: 164, r:  12, s: 1.00 },
  { x: 176, y: 143, r: -12, s: 0.88 },
  { x: 179, y: 120, r:  10, s: 0.78 },
];

const ACORNS = [
  { x: 34, y: 168, s: 0.95 },
  { x: 26, y: 153, s: 0.88 },
  { x: 21, y: 138, s: 0.82 },
];

interface BerryCluster { x: number; y: number; offsets: [number, number][] }
const BERRY_CLUSTERS: BerryCluster[] = [
  { x: 157, y: 185, offsets: [[-3, 0], [3, -2], [0, -5]] },
  { x: 168, y: 169, offsets: [[-3, 1], [3, -1], [0, -5], [2, 3]] },
  { x: 176, y: 154, offsets: [[-3, 0], [3, -2], [0, -5]] },
  { x: 181, y: 140, offsets: [[-3, 1], [3, -1], [0, -5]] },
];

// ─── Static shield / crown data ──────────────────────────────────────────────
const STRIPES = [
  { y:  80, fill: "#C8102E" },
  { y:  95, fill: "#FFFFFF" },
  { y: 110, fill: "#C8102E" },
  { y: 125, fill: "#FFFFFF" },
  { y: 140, fill: "#C8102E" },
  { y: 155, fill: "#FFFFFF" },
  { y: 170, fill: "#C8102E" },
  { y: 185, fill: "#FFFFFF" },
];

const GEMS = [
  { cx:  40, fill: "#9B1B30" },
  { cx:  57, fill: "#1A3A8F" },
  { cx:  74, fill: "#1B6B3A" },
  { cx: 100, fill: "#9B1B30" },
  { cx: 126, fill: "#1A3A8F" },
  { cx: 143, fill: "#1B6B3A" },
  { cx: 160, fill: "#9B1B30" },
];

const PANELS = [
  { x:  89, y: 36, w: 22, h: 30, bg: "#1A3A8F", fg: "#2655A0" },
  { x:  66, y: 42, w: 18, h: 24, bg: "#9B1B30", fg: "#B52235" },
  { x: 116, y: 42, w: 18, h: 24, bg: "#9B1B30", fg: "#B52235" },
  { x:  46, y: 49, w: 15, h: 19, bg: "#1A3A8F", fg: "#2655A0" },
  { x: 139, y: 49, w: 15, h: 19, bg: "#1A3A8F", fg: "#2655A0" },
  { x:  30, y: 56, w: 12, h: 15, bg: "#9B1B30", fg: "#B52235" },
  { x: 158, y: 56, w: 12, h: 15, bg: "#9B1B30", fg: "#B52235" },
];

const ARCH_GEMS = [
  { cx:  50, cy: 58, fill: "#9B1B30" },
  { cx:  75, cy: 42, fill: "#1B6B3A" },
  { cx: 100, cy: 36, fill: "#1A3A8F" },
  { cx: 125, cy: 42, fill: "#1B6B3A" },
  { cx: 150, cy: 58, fill: "#9B1B30" },
];

// Shield clip path (reused in multiple places)
const SHIELD_PATH = "M56,80 H144 V148 C144,178 100,197 100,197 C100,197 56,178 56,148 Z";

// ─── Component ────────────────────────────────────────────────────────────────
/**
 * Hungarian Coat of Arms — Full animated SVG v4.
 * ViewBox: 0 0 200 250 (4:5, matches 240×300 container).
 * 16-phase animation sequence including oak wreath, laurel wreath, heraldic
 * shield (stripes + apostolic cross), and Holy Crown of St. Stephen with
 * Byzantine enamel panels, crossing arches, pendilia, and tilted apex cross.
 */
export function StStephensCrest() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Phase 16 — Breathing glow (infinite) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 75% at 50% 52%, rgba(197,165,90,0.15) 0%, transparent 70%)",
        }}
        animate={{ opacity: [1, 1.6, 1], scale: [1, 1.04, 1] }}
        transition={{ duration: 5.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Thin gold ring */}
      <div
        className="absolute inset-[-10px] rounded-full border border-[rgba(197,165,90,0.12)]"
        aria-hidden="true"
      />

      <motion.svg
        viewBox="0 0 200 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        role="img"
        aria-label="Hungarian Coat of Arms — St. Stephen's Crown"
      >
        <defs>
          <clipPath id="ssc-shield-clip">
            <path d={SHIELD_PATH} />
          </clipPath>

          {/* Gold dome gradient — lighter at top-left, darker at base */}
          <linearGradient
            id="ssc-dome-grad"
            x1="28" y1="26" x2="172" y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#F5D078" />
            <stop offset="50%"  stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#C5912A" />
          </linearGradient>
        </defs>

        {/* ══════════════════════════════════════════════
            WREATH — Phases 7–9
            Rendered before shield so shield sits on top.
        ══════════════════════════════════════════════ */}

        {/* Phase 7 — Left oak branch spine */}
        <motion.path
          d="M99,236 C81,223 58,203 40,181 C24,161 14,143 17,117 C19,104 24,94 32,88"
          stroke="#4A2C17" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.0, delay: 2.1, ease: "easeOut" }}
        />

        {/* Oak leaves — staggered pop-in after branch draws */}
        {OAK_LEAVES.map((l, i) => (
          <motion.g
            key={`oak-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${l.x}px ${l.y}px` }}
            transition={{ duration: 0.35, delay: 2.6 + i * 0.09, ease: "easeOut" }}
          >
            <g transform={`translate(${l.x},${l.y}) rotate(${l.r}) scale(${l.s})`}>
              <path d={OAK_D} fill="#3A7D44" stroke="#2A5E32" strokeWidth="0.4" />
              {/* Midrib highlight */}
              <line x1="0" y1="-5.5" x2="0" y2="5.5"
                stroke="#4D9A5A" strokeWidth="0.35" opacity="0.65" />
            </g>
          </motion.g>
        ))}

        {/* Acorns — spring bounce after leaves */}
        {ACORNS.map((a, i) => (
          <motion.g
            key={`acorn-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${a.x}px ${a.y}px` }}
            transition={{ duration: 0.3, delay: 3.0 + i * 0.1, type: "spring", bounce: 0.4 }}
          >
            <g transform={`translate(${a.x},${a.y}) scale(${a.s})`}>
              {/* Stem */}
              <line x1="0" y1="-7" x2="0" y2="-5.5" stroke="#4A2C17" strokeWidth="0.8" />
              {/* Cupule */}
              <path
                d="M-3.5,-5.5 C-3.5,-6.5 3.5,-6.5 3.5,-5.5 L3,-2.5 C3,-1.5 -3,-1.5 -3.5,-2.5 Z"
                fill="#6B3A2A"
              />
              {/* Nut */}
              <ellipse cx="0" cy="1.5" rx="3" ry="4" fill="#C4A265" />
            </g>
          </motion.g>
        ))}

        {/* Phase 8 — Right laurel branch spine */}
        <motion.path
          d="M101,236 C119,223 142,203 160,181 C176,161 186,143 183,117 C181,104 176,94 168,88"
          stroke="#4A2C17" strokeWidth="3" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.0, delay: 2.3, ease: "easeOut" }}
        />

        {/* Laurel leaves */}
        {LAUREL_LEAVES.map((l, i) => (
          <motion.g
            key={`laurel-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${l.x}px ${l.y}px` }}
            transition={{ duration: 0.35, delay: 2.8 + i * 0.09, ease: "easeOut" }}
          >
            <g transform={`translate(${l.x},${l.y}) rotate(${l.r}) scale(${l.s})`}>
              <path d={LAUREL_D} fill="#4A8040" stroke="#335C2A" strokeWidth="0.35" />
              <line x1="0" y1="-6" x2="0" y2="6"
                stroke="#5A9850" strokeWidth="0.3" opacity="0.6" />
            </g>
          </motion.g>
        ))}

        {/* Red berries — spring pop */}
        {BERRY_CLUSTERS.map((bc, ci) =>
          bc.offsets.map(([ox, oy], bi) => (
            <motion.circle
              key={`berry-${ci}-${bi}`}
              cx={bc.x + ox} cy={bc.y + oy} r="2.5"
              fill="#CC2200"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ transformOrigin: `${bc.x + ox}px ${bc.y + oy}px` }}
              transition={{
                duration: 0.25,
                delay: 3.3 + ci * 0.09 + bi * 0.05,
                type: "spring",
                bounce: 0.55,
              }}
            />
          ))
        )}

        {/* Phase 9 — Gold binding ribbon where branches cross */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ transformOrigin: "100px 234px" }}
          transition={{ duration: 0.4, delay: 3.2, ease: "easeOut" }}
        >
          {/* Bow loops */}
          <path
            d="M87,231 C91,241 99,243 100,237 C101,243 109,241 113,231"
            fill="none" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round"
          />
          {/* Knot */}
          <circle cx="100" cy="234" r="3.5" fill="#D4AF37" />
          {/* Tails */}
          <path d="M97,237 C95,243 93,247 90,248"
            stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <path d="M103,237 C105,243 107,247 110,248"
            stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        </motion.g>

        {/* ══════════════════════════════════════════════
            SHIELD — Phases 1–6
        ══════════════════════════════════════════════ */}

        {/* Shield dark base (visible before stripes animate in) */}
        <path d={SHIELD_PATH} fill="#0D1A2E" />

        <g clipPath="url(#ssc-shield-clip)">

          {/* Phase 1 — 8 red/white stripes, scaleX from left edge, 80ms stagger */}
          {STRIPES.map((s, i) => (
            <motion.rect
              key={`stripe-${i}`}
              x={56} y={s.y} width={44} height={16}
              fill={s.fill}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              style={{ transformOrigin: `56px ${s.y + 8}px` }}
              transition={{ duration: 0.35, delay: 0.3 + i * 0.08, ease: "easeOut" }}
            />
          ))}

          {/* Phase 2 — Right red field fades in (heraldic: Gules) */}
          <motion.rect
            x={100} y={80} width={44} height={117}
            fill="#C8102E"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.95 }}
          />

          {/* Phase 3 — Three green hills rise from shield bottom (right field only) */}
          <motion.g
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            style={{ transformOrigin: "122px 197px" }}
            transition={{ duration: 0.4, delay: 1.1, ease: "easeOut" }}
          >
            <ellipse cx="110" cy="194" rx="10" ry="14" fill="#1E5024" />
            <ellipse cx="122" cy="189" rx="13" ry="18" fill="#1E5024" />
            <ellipse cx="134" cy="194" rx="10" ry="14" fill="#1E5024" />
          </motion.g>

          {/* Phase 4 — Apostolic double cross on shield — rises from bottom */}
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            style={{ transformOrigin: "122px 172px" }}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
          >
            {/* Vertical shaft */}
            <rect x="120" y="92"  width="4"  height="78" rx="1" fill="#FFFFFF" />
            {/* Upper crossbar (shorter) */}
            <rect x="111" y="108" width="22" height="4"  rx="1" fill="#FFFFFF" />
            {/* Lower crossbar (longer) */}
            <rect x="107" y="126" width="30" height="4"  rx="1" fill="#FFFFFF" />
          </motion.g>

          {/* Phase 5 — Small heraldic crown at base of cross, in right field (centered at x=122) */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: "122px 186px" }}
            transition={{ duration: 0.45, delay: 1.65, type: "spring", bounce: 0.4 }}
          >
            {/* Crown points */}
            <path
              d="M113,192 L113,186 L117.5,180 L122,186 L126.5,180 L131,186 L131,192 Z"
              fill="#D4AF37"
            />
            {/* Crown band */}
            <rect x="113" y="188" width="18" height="5" rx="1" fill="#C5A55A" />
            {/* Crown gems */}
            <circle cx="117.5" cy="191" r="1.8" fill="#9B1B30" />
            <circle cx="122"   cy="191" r="1.8" fill="#1A3A8F" />
            <circle cx="126.5" cy="191" r="1.8" fill="#9B1B30" />
          </motion.g>

        </g>{/* end shield clip */}

        {/* Center divider between shield halves */}
        <line
          x1="100" y1="80" x2="100" y2="190"
          stroke="#C5A55A" strokeWidth="1" opacity="0.9"
        />

        {/* Phase 6 — Shield border traces itself */}
        <motion.path
          d={SHIELD_PATH}
          fill="none" stroke="#D4AF37" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, delay: 1.8, ease: "easeInOut" }}
        />

        {/* ══════════════════════════════════════════════
            CROWN — Phases 10–15
            Render order: dome → panels → arches → circlet → gems → pendilia → orb → cross
        ══════════════════════════════════════════════ */}

        {/* Phase 12 — Gold dome hemisphere, expands from circlet upward */}
        <motion.path
          d="M28,80 C28,45 60,26 100,26 C140,26 172,45 172,80 Z"
          fill="url(#ssc-dome-grad)"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ transformOrigin: "100px 80px" }}
          transition={{ duration: 0.7, delay: 2.8, ease: "easeOut" }}
        />

        {/* Dome equator arc — 3-D surface illusion */}
        <motion.path
          d="M28,80 C42,52 64,36 100,32 C136,36 158,52 172,80"
          fill="none" stroke="#B8943A" strokeWidth="1.5" opacity="0"
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 2.95 }}
        />

        {/* Phase 11 — Byzantine enamel portrait panels, staggered 100ms */}
        {PANELS.map((p, i) => (
          <motion.g
            key={`panel-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 3.05 + i * 0.1 }}
          >
            {/* Panel border */}
            <rect
              x={p.x} y={p.y} width={p.w} height={p.h}
              rx="1.5" fill={p.bg} stroke="#D4AF37" strokeWidth="0.6"
            />
            {/* Inner field */}
            <rect
              x={p.x + 2} y={p.y + 2}
              width={p.w - 4} height={p.h - 4}
              rx="1" fill={p.fg}
            />
            {/* Figure head (Byzantine gold nimbus) */}
            <ellipse
              cx={p.x + p.w / 2} cy={p.y + p.h * 0.28}
              rx={p.w * 0.18} ry={p.h * 0.16}
              fill="#E8B84B" opacity="0.55"
            />
            {/* Figure body line */}
            <line
              x1={p.x + p.w / 2} y1={p.y + p.h * 0.46}
              x2={p.x + p.w / 2} y2={p.y + p.h * 0.86}
              stroke="#E8B84B" strokeWidth="0.5" opacity="0.45"
            />
          </motion.g>
        ))}

        {/* Phase 12b — Two crown arches draw across dome (left-to-right) */}
        <motion.path
          d="M28,79 C50,50 72,34 100,28 C128,34 150,50 172,79"
          fill="none" stroke="#D4AF37" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 3.5, ease: "easeOut" }}
        />
        <motion.path
          d="M46,78 C62,50 80,32 100,26 C120,32 138,50 154,78"
          fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 3.55, ease: "easeOut" }}
        />

        {/* Phase 10 — Crown circlet / base band, scaleX from center */}
        <motion.rect
          x={28} y={72} width={144} height={12} rx="2.5"
          fill="#E8B84B"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: "100px 78px" }}
          transition={{ duration: 0.5, delay: 3.0, ease: "easeOut" }}
        />
        {/* Circlet filigree edge */}
        <motion.line
          x1={28} y1={83} x2={172} y2={83}
          stroke="#C5912A" strokeWidth="0.6" opacity="0"
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.4, delay: 3.1 }}
        />

        {/* Phase 15 — Circlet gems sparkle in, 60ms stagger */}
        {GEMS.map((g, i) => (
          <motion.g
            key={`gem-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${g.cx}px 78px` }}
            transition={{
              duration: 0.35,
              delay: 4.2 + i * 0.06,
              type: "spring",
              bounce: 0.5,
            }}
          >
            <ellipse
              cx={g.cx} cy={78} rx={4} ry={4.5}
              fill={g.fill} stroke="#F5F0E8" strokeWidth="0.5"
            />
            {/* Gem highlight */}
            <ellipse
              cx={g.cx - 1.2} cy={76} rx={1.2} ry={1.5}
              fill="rgba(255,255,255,0.3)"
            />
          </motion.g>
        ))}

        {/* Arch gemstones along the two arches */}
        {ARCH_GEMS.map((g, i) => (
          <motion.circle
            key={`arch-gem-${i}`}
            cx={g.cx} cy={g.cy} r={2.5}
            fill={g.fill} stroke="#D4AF37" strokeWidth="0.4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${g.cx}px ${g.cy}px` }}
            transition={{
              duration: 0.3,
              delay: 4.4 + i * 0.06,
              type: "spring",
              bounce: 0.5,
            }}
          />
        ))}

        {/* Pendilia — left (two-segment articulated chain) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.2 }}
        >
          <line x1="28" y1="78" x2="14" y2="107"
            stroke="#C5A55A" strokeWidth="1.2" opacity="0.85" />
          <circle cx="13" cy="110" r="4.5"
            fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="13" y1="114.5" x2="11" y2="138"
            stroke="#C5A55A" strokeWidth="1" opacity="0.7" />
          <circle cx="11" cy="141" r="3.5" fill="#C5A55A" />
        </motion.g>

        {/* Pendilia — right (mirror) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.25 }}
        >
          <line x1="172" y1="78" x2="186" y2="107"
            stroke="#C5A55A" strokeWidth="1.2" opacity="0.85" />
          <circle cx="187" cy="110" r="4.5"
            fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.6" />
          <line x1="187" y1="114.5" x2="189" y2="138"
            stroke="#C5A55A" strokeWidth="1" opacity="0.7" />
          <circle cx="189" cy="141" r="3.5" fill="#C5A55A" />
        </motion.g>

        {/* Phase 13 — Crown orb at arch crossing point */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ transformOrigin: "100px 27px" }}
          transition={{ duration: 0.3, delay: 3.9, type: "spring", bounce: 0.4 }}
        >
          <circle cx="100" cy="27" r="5"
            fill="#E8B84B" stroke="#D4AF37" strokeWidth="0.9" />
          {/* Orb highlight */}
          <ellipse cx="98.5" cy="25" rx="2" ry="2.5"
            fill="rgba(255,255,255,0.28)" />
        </motion.g>

        {/* Phase 14 — Apostolic cross on crown, tilted ~10° left (historically accurate) */}
        <motion.g
          transform="rotate(-10, 100, 27)"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          style={{ transformOrigin: "100px 27px" }}
          transition={{ duration: 0.5, delay: 4.0, ease: "easeOut" }}
        >
          {/* Vertical shaft */}
          <rect x="98.5" y="3"  width="3"  height="24" rx="0.8" fill="#FFD700" />
          {/* Upper crossbar — shorter */}
          <rect x="93.5" y="9"  width="13" height="2.5" rx="0.7" fill="#FFD700" />
          {/* Lower crossbar — longer */}
          <rect x="90"   y="15" width="20" height="2.5" rx="0.7" fill="#FFD700" />
        </motion.g>

      </motion.svg>
    </div>
  );
}
