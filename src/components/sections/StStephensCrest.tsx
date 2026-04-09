"use client";
import { motion } from "framer-motion";

// ─── Static shield / crown data ──────────────────────────────────────────────
// Shield: 8 red/white stripes on left half
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

// Crown circlet gems: ruby / sapphire / emerald pattern
const GEMS = [
  { cx:  63, fill: "#9B1B30" },
  { cx:  74, fill: "#1A3A8F" },
  { cx:  84, fill: "#1B6B3A" },
  { cx: 100, fill: "#9B1B30" },
  { cx: 116, fill: "#1A3A8F" },
  { cx: 126, fill: "#1B6B3A" },
  { cx: 137, fill: "#9B1B30" },
];

// Byzantine enamel portrait panels on dome surface
const PANELS = [
  { x:  93, y: 36, w: 13, h: 30, bg: "#1A3A8F", fg: "#2655A0" },
  { x:  80, y: 42, w: 11, h: 24, bg: "#9B1B30", fg: "#B52235" },
  { x: 110, y: 42, w: 11, h: 24, bg: "#9B1B30", fg: "#B52235" },
  { x:  67, y: 49, w: 10, h: 19, bg: "#1A3A8F", fg: "#2655A0" },
  { x: 124, y: 49, w: 10, h: 19, bg: "#1A3A8F", fg: "#2655A0" },
  { x:  58, y: 56, w:  7, h: 15, bg: "#9B1B30", fg: "#B52235" },
  { x: 135, y: 56, w:  7, h: 15, bg: "#9B1B30", fg: "#B52235" },
];

// Gemstones set into the crown arches
const ARCH_GEMS = [
  { cx:  69, cy: 58, fill: "#9B1B30" },
  { cx:  85, cy: 42, fill: "#1B6B3A" },
  { cx: 100, cy: 36, fill: "#1A3A8F" },
  { cx: 115, cy: 42, fill: "#1B6B3A" },
  { cx: 131, cy: 58, fill: "#9B1B30" },
];

// Shield clip path — full heater shield shape
const SHIELD_PATH = "M56,80 H144 V148 C144,178 100,197 100,197 C100,197 56,178 56,148 Z";

// ─── Pendilia chain data ──────────────────────────────────────────────────────
// Left pendilia: attach at (28,84), first medallion at (12,112), end at (9,138)
// Each "link" is a small circle (r=1.8) — visually reads as articulated chain
const LEFT_CHAIN_1 = [
  [53.3, 88.7], [50.7, 93.3], [48.0, 98.0], [45.3, 102.7], [42.7, 107.3],
] as [number, number][];
const LEFT_CHAIN_2 = [
  [39.6, 117.2], [39.2, 122.4], [38.8, 127.6], [38.4, 132.8],
] as [number, number][];
// Right pendilia (mirror)
const RIGHT_CHAIN_1 = [
  [146.7, 88.7], [149.3, 93.3], [152.0, 98.0], [154.7, 102.7], [157.3, 107.3],
] as [number, number][];
const RIGHT_CHAIN_2 = [
  [160.4, 117.2], [160.8, 122.4], [161.2, 127.6], [161.6, 132.8],
] as [number, number][];

// ─── Component ───────────────────────────────────────────────────────────────
/**
 * Hungarian Coat of Arms — animated hero crest v5.
 * ViewBox: 0 0 200 250 (4:5 → 340×425 container).
 *
 * Historically accurate details:
 * - Crown cross tilts LEFT (−10°) — the authentic lean of the Holy Crown of St. Stephen
 * - Double-barred apostolic cross on shield (upper bar shorter than lower)
 * - Three-peaked green hill (Zöld-halom) beneath the shield cross
 * - Small gold crown at shield base straddling the divider
 * - Oak branch (left, lobed leaves + acorns) vs laurel (right, oval leaves + crimson berries)
 * - No decorative ring border — not part of official arms
 * - Articulated chain pendilia hanging from crown band
 */
export function StStephensCrest() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Phase 16 — Breathing glow (infinite, starts after sequence) */}
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
      {/* NOTE: No decorative ring border — not canonical to the official coat of arms */}

      <motion.svg
        viewBox="0 0 200 205"
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
          {/* Gold dome gradient — lighter at crown top, darker at band */}
          <linearGradient
            id="ssc-dome-grad"
            x1="56" y1="26" x2="144" y2="80"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%"   stopColor="#F5D078" />
            <stop offset="50%"  stopColor="#E8B84B" />
            <stop offset="100%" stopColor="#C5912A" />
          </linearGradient>
        </defs>

        {/* ══════════════════════════════════════════════
            SHIELD — Phases 1–6
        ══════════════════════════════════════════════ */}

        {/* Shield dark base */}
        <path d={SHIELD_PATH} fill="#0D1A2E" />

        <g clipPath="url(#ssc-shield-clip)">

          {/* Phase 1 — 8 red/white stripes, left half, scaleX staggered */}
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

          {/* Phase 2 — Right field: RED (Gules) — white cross reads on red */}
          <motion.rect
            x={100} y={80} width={44} height={117}
            fill="#C8102E"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.95 }}
          />

          {/* Phase 3 — Zöld-halom: three-peaked green hill at base of right field.
              Large ry values ensure the tops of the hills are visible high enough
              in the shield before the clip path narrows toward the bottom point.
              All three hills are within x=100–144 (right field). The clip handles edges. */}
          <motion.g
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            style={{ transformOrigin: "120px 197px" }}
            transition={{ duration: 0.45, delay: 1.1, ease: "easeOut" }}
          >
            {/* Left hill */}
            <ellipse cx="108" cy="192" rx="12" ry="22" fill="#1E5024" />
            {/* Center hill — tallest, sits directly under cross */}
            <ellipse cx="120" cy="185" rx="16" ry="30" fill="#1E5024" />
            {/* Right hill */}
            <ellipse cx="132" cy="192" rx="12" ry="22" fill="#1E5024" />
          </motion.g>

          {/* Phase 4 — Apostolic DOUBLE cross on shield.
              Two horizontal bars: upper shorter, lower longer — the patriarchal cross.
              Centered at x=122 (center of right field = (100+144)/2).
              Shaft bottom at y=158; hills top (center) at y=155 — they meet correctly. */}
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            style={{ transformOrigin: "122px 125px" }}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
          >
            {/* Vertical shaft */}
            <rect x="120" y="92"  width="4"  height="68" rx="1" fill="#FFFFFF" />
            {/* Upper crossbar — shorter (patriarchal cross upper arm) */}
            <rect x="112" y="112" width="20" height="6"  rx="1" fill="#FFFFFF" />
            {/* Lower crossbar — longer (longer arm of patriarchal cross) */}
            <rect x="108" y="132" width="28" height="6"  rx="1" fill="#FFFFFF" />
          </motion.g>

          {/* Phase 5 — Small gold crown at base of cross.
              Centered at x=122 (center of right field = (100+144)/2), under the cross shaft.
              Points peak at y=158, just touching the cross shaft bottom at y=160. */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: "122px 152px" }}
            transition={{ duration: 0.45, delay: 1.65, type: "spring", bounce: 0.4 }}
          >
            {/* Crown three points */}
            <path
              d="M113,160 L113,154 L117.5,147 L122,154 L126.5,147 L131,154 L131,160 Z"
              fill="#D4AF37"
            />
            {/* Crown band */}
            <rect x="113" y="155" width="18" height="6" rx="1" fill="#C5A55A" />
            {/* Crown gems */}
            <circle cx="117.5" cy="159" r="1.8" fill="#9B1B30" />
            <circle cx="122"   cy="159" r="1.8" fill="#1A3A8F" />
            <circle cx="126.5" cy="159" r="1.8" fill="#9B1B30" />
          </motion.g>

        </g>{/* end shield clip */}

        {/* Divider between left (stripes) and right (field) halves */}
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
        ══════════════════════════════════════════════ */}

        {/* Phase 12 — Gold dome hemisphere */}
        <motion.path
          d="M56,80 C56,45 76,26 100,26 C124,26 144,45 144,80 Z"
          fill="url(#ssc-dome-grad)"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          style={{ transformOrigin: "100px 80px" }}
          transition={{ duration: 0.7, delay: 2.8, ease: "easeOut" }}
        />

        {/* Dome 3-D surface arc */}
        <motion.path
          d="M56,80 C65,52 78,36 100,32 C122,36 135,52 144,80"
          fill="none" stroke="#B8943A" strokeWidth="1.5" opacity="0"
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 2.95 }}
        />

        {/* Phase 11 — Byzantine enamel portrait panels, 100ms stagger */}
        {PANELS.map((p, i) => (
          <motion.g
            key={`panel-${i}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 3.05 + i * 0.1 }}
          >
            <rect
              x={p.x} y={p.y} width={p.w} height={p.h}
              rx="1.5" fill={p.bg} stroke="#D4AF37" strokeWidth="0.6"
            />
            <rect
              x={p.x + 2} y={p.y + 2} width={p.w - 4} height={p.h - 4}
              rx="1" fill={p.fg}
            />
            {/* Gold nimbus halo */}
            <ellipse
              cx={p.x + p.w / 2} cy={p.y + p.h * 0.28}
              rx={p.w * 0.18} ry={p.h * 0.16}
              fill="#E8B84B" opacity="0.55"
            />
            {/* Figure body */}
            <line
              x1={p.x + p.w / 2} y1={p.y + p.h * 0.46}
              x2={p.x + p.w / 2} y2={p.y + p.h * 0.86}
              stroke="#E8B84B" strokeWidth="0.5" opacity="0.45"
            />
          </motion.g>
        ))}

        {/* Phase 12b — Crown arches draw across dome */}
        <motion.path
          d="M56,79 C69,50 83,34 100,28 C117,34 131,50 144,79"
          fill="none" stroke="#D4AF37" strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 3.5, ease: "easeOut" }}
        />
        <motion.path
          d="M67,78 C77,50 88,32 100,26 C112,32 124,50 133,78"
          fill="none" stroke="#D4AF37" strokeWidth="1.5" opacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 3.55, ease: "easeOut" }}
        />

        {/* Phase 10 — Crown circlet / base band */}
        <motion.rect
          x={56} y={72} width={88} height={12} rx="2.5"
          fill="#E8B84B"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          style={{ transformOrigin: "100px 78px" }}
          transition={{ duration: 0.5, delay: 3.0, ease: "easeOut" }}
        />
        <motion.line
          x1={56} y1={83} x2={144} y2={83}
          stroke="#C5912A" strokeWidth="0.6" opacity="0"
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.4, delay: 3.1 }}
        />

        {/* Phase 15 — Circlet gems sparkle in */}
        {GEMS.map((g, i) => (
          <motion.g
            key={`gem-${i}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${g.cx}px 78px` }}
            transition={{ duration: 0.35, delay: 4.2 + i * 0.06, type: "spring", bounce: 0.5 }}
          >
            <ellipse cx={g.cx} cy={78} rx={4} ry={4.5}
              fill={g.fill} stroke="#F5F0E8" strokeWidth="0.5" />
            <ellipse cx={g.cx - 1.2} cy={76} rx={1.2} ry={1.5}
              fill="rgba(255,255,255,0.3)" />
          </motion.g>
        ))}

        {/* Arch gemstones */}
        {ARCH_GEMS.map((g, i) => (
          <motion.circle
            key={`arch-gem-${i}`}
            cx={g.cx} cy={g.cy} r={2.5}
            fill={g.fill} stroke="#D4AF37" strokeWidth="0.4"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            style={{ transformOrigin: `${g.cx}px ${g.cy}px` }}
            transition={{ duration: 0.3, delay: 4.4 + i * 0.06, type: "spring", bounce: 0.5 }}
          />
        ))}

        {/* ── Pendilia — articulated chains with medallions ──
            Each side: thin spine line + chain links (r=1.8 circles) + two medallions.
            This replaces the previous single line + two circles which read as
            "decorative balls floating beside the crown." */}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.2 }}
        >
          {/* LEFT — spine line for depth */}
          <line x1="56" y1="84" x2="40" y2="112"
            stroke="#9A7A30" strokeWidth="0.7" opacity="0.5" />
          <line x1="40" y1="112" x2="37" y2="138"
            stroke="#9A7A30" strokeWidth="0.7" opacity="0.5" />

          {/* LEFT — first segment chain links */}
          {LEFT_CHAIN_1.map(([cx, cy], i) => (
            <circle key={`lc1-${i}`} cx={cx} cy={cy} r="1.8"
              fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.35" />
          ))}

          {/* LEFT — first medallion */}
          <circle cx="40" cy="112" r="5.5" fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.7" />
          <circle cx="40" cy="112" r="3.5" fill="#1A3A8F" />
          <circle cx="39" cy="111" r="1"   fill="rgba(255,255,255,0.25)" />

          {/* LEFT — second segment chain links */}
          {LEFT_CHAIN_2.map(([cx, cy], i) => (
            <circle key={`lc2-${i}`} cx={cx} cy={cy} r="1.8"
              fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.35" />
          ))}

          {/* LEFT — end medallion */}
          <circle cx="37" cy="138" r="4.5" fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.6" />
          <circle cx="37" cy="138" r="2.8" fill="#9B1B30" />
          <circle cx="36" cy="137" r="0.9" fill="rgba(255,255,255,0.25)" />
        </motion.g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 3.25 }}
        >
          {/* RIGHT — spine lines */}
          <line x1="144" y1="84" x2="160" y2="112"
            stroke="#9A7A30" strokeWidth="0.7" opacity="0.5" />
          <line x1="160" y1="112" x2="163" y2="138"
            stroke="#9A7A30" strokeWidth="0.7" opacity="0.5" />

          {/* RIGHT — first segment chain links */}
          {RIGHT_CHAIN_1.map(([cx, cy], i) => (
            <circle key={`rc1-${i}`} cx={cx} cy={cy} r="1.8"
              fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.35" />
          ))}

          {/* RIGHT — first medallion */}
          <circle cx="160" cy="112" r="5.5" fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.7" />
          <circle cx="160" cy="112" r="3.5" fill="#1A3A8F" />
          <circle cx="159" cy="111" r="1"   fill="rgba(255,255,255,0.25)" />

          {/* RIGHT — second segment chain links */}
          {RIGHT_CHAIN_2.map(([cx, cy], i) => (
            <circle key={`rc2-${i}`} cx={cx} cy={cy} r="1.8"
              fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.35" />
          ))}

          {/* RIGHT — end medallion */}
          <circle cx="163" cy="138" r="4.5" fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.6" />
          <circle cx="163" cy="138" r="2.8" fill="#9B1B30" />
          <circle cx="162" cy="137" r="0.9" fill="rgba(255,255,255,0.25)" />
        </motion.g>

        {/* Phase 13 — Crown orb at arch crossing point */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          style={{ transformOrigin: "100px 27px" }}
          transition={{ duration: 0.3, delay: 3.9, type: "spring", bounce: 0.4 }}
        >
          <circle cx="100" cy="27" r="5" fill="#E8B84B" stroke="#D4AF37" strokeWidth="0.9" />
          <ellipse cx="98.5" cy="25" rx="2" ry="2.5" fill="rgba(255,255,255,0.28)" />
        </motion.g>

        {/* Phase 14 — Apostolic double cross on crown apex.
            THE KEY DETAIL: the Holy Crown of St. Stephen's cross tilts LEFT.
            This is historically authentic — the cross was bent centuries ago and
            was kept as-is. Every Hungarian recognizes the tilt immediately.

            FIX: the static SVG rotation must be on a PLAIN <g>, not on the
            <motion.g>. When Framer Motion takes over transforms for scaleY/opacity
            animation, it replaces the SVG `transform` attribute via CSS transforms,
            causing the rotation to be ignored. Nesting isolates the two systems. */}
        <g transform="rotate(-10, 100, 27)">
          <motion.g
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            style={{ transformOrigin: "100px 27px" }}
            transition={{ duration: 0.5, delay: 4.0, ease: "easeOut" }}
          >
            {/* Vertical shaft */}
            <rect x="98.5" y="3"  width="3"  height="24" rx="0.8" fill="#FFD700" />
            {/* Upper crossbar — shorter (top arm of patriarchal cross) */}
            <rect x="93.5" y="9"  width="13" height="2.5" rx="0.7" fill="#FFD700" />
            {/* Lower crossbar — longer (main arm of patriarchal cross) */}
            <rect x="90"   y="15" width="20" height="2.5" rx="0.7" fill="#FFD700" />
          </motion.g>
        </g>

      </motion.svg>
    </div>
  );
}
