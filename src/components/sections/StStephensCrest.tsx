"use client";
import { motion } from "framer-motion";

/**
 * St. Stephen's Crown — animated hero crest.
 * Inline SVG so Framer Motion can drive per-element animations.
 *
 * Crown accurate to the Holy Crown of Hungary (Szent Korona):
 *   - Tilted apostolic double cross (~22° clockwise lean)
 *   - Blue enamel circular medallions on outer arch peaks
 *   - Alternating blue/red enamel on base band
 *   - Pendilia on both sides
 * Shield (Hungarian heraldic arms):
 *   - Left: 8 alternating silver/red horizontal stripes
 *   - Right: red field, apostolic double cross in white (prominent),
 *     gold footing at cross base, three green hills
 */
export function StStephensCrest() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Breathing glow */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 55%, rgba(197,165,90,0.14) 0%, transparent 70%)",
        }}
        animate={{ opacity: [1, 1.7, 1], scale: [1, 1.04, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Thin gold ring */}
      <div
        className="absolute inset-[-10px] rounded-full border border-[rgba(197,165,90,0.15)]"
        aria-hidden="true"
      />

      <motion.svg
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full h-full"
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        role="img"
        aria-label="St. Stephen's Crown — Holy Crown of Hungary"
      >
        <defs>
          <clipPath id="ssc-hero-shield">
            <path d="M12,26 H68 V65 C68,83 40,97 40,97 C40,97 12,83 12,65 Z"/>
          </clipPath>
        </defs>

        {/* ════ ST. STEPHEN'S CROWN ════ */}

        {/* Base band */}
        <motion.rect
          x="18" y="20" width="44" height="7" rx="1.5" fill="#C5A55A"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          style={{ transformOrigin: "40px 23.5px" }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        />

        {/* Enamel circular medallions on band */}
        <circle cx="23"  cy="23.5" r="2.5" fill="#1A3F7A" stroke="#D4AF37" strokeWidth="0.4"/>
        <circle cx="31"  cy="23.5" r="2.5" fill="#CE2939" stroke="#D4AF37" strokeWidth="0.4"/>
        <circle cx="40"  cy="23.5" r="2.5" fill="#1A3F7A" stroke="#D4AF37" strokeWidth="0.4"/>
        <circle cx="49"  cy="23.5" r="2.5" fill="#CE2939" stroke="#D4AF37" strokeWidth="0.4"/>
        <circle cx="57"  cy="23.5" r="2.5" fill="#1A3F7A" stroke="#D4AF37" strokeWidth="0.4"/>

        {/* Left arch */}
        <motion.path
          d="M22,20 C23,14 21,8 26,7 C31,6 30,14 30,20 Z"
          fill="#D4AF37"
          initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
        />
        {/* Left arch gem — blue enamel */}
        <circle cx="26" cy="7" r="3.2" fill="#D4AF37"/>
        <circle cx="26" cy="7" r="2.5" fill="#1A3F7A"/>
        <circle cx="26" cy="7" r="1"   fill="#3A68B8"/>

        {/* Center arch (tallest) */}
        <motion.path
          d="M32,20 C33,11 36,1 40,1 C44,1 47,11 48,20 Z"
          fill="#D4AF37"
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
        />

        {/* Right arch */}
        <motion.path
          d="M50,20 C50,14 49,6 54,7 C59,8 57,14 58,20 Z"
          fill="#D4AF37"
          initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.65, ease: "easeOut" }}
        />
        {/* Right arch gem — blue enamel */}
        <circle cx="54" cy="7" r="3.2" fill="#D4AF37"/>
        <circle cx="54" cy="7" r="2.5" fill="#1A3F7A"/>
        <circle cx="54" cy="7" r="1"   fill="#3A68B8"/>

        {/* Tilted cross — ~22° clockwise, St. Stephen's Crown signature */}
        <motion.g
          transform="rotate(22, 40, 1)"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: "40px 1px" }}
          transition={{ duration: 0.45, delay: 0.85, ease: "easeOut" }}
        >
          <rect x="38.8" y="-8"  width="2.4" height="14"  rx="0.7" fill="#D4AF37"/>
          <rect x="35"   y="-5"  width="10"  height="2.2" rx="0.6" fill="#D4AF37"/>
          <rect x="33"   y="0.5" width="14"  height="2.2" rx="0.6" fill="#D4AF37"/>
        </motion.g>

        {/* Pendilia — left */}
        <line x1="18" y1="23" x2="11" y2="33" stroke="#C5A55A" strokeWidth="0.7" opacity="0.85"/>
        <circle cx="11" cy="34"   r="2"   fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.4"/>
        <line x1="11" y1="36" x2="10" y2="43" stroke="#C5A55A" strokeWidth="0.6" opacity="0.65"/>
        <circle cx="10" cy="44.5" r="1.5" fill="#C5A55A"/>

        {/* Pendilia — right */}
        <line x1="62" y1="23" x2="69" y2="33" stroke="#C5A55A" strokeWidth="0.7" opacity="0.85"/>
        <circle cx="69" cy="34"   r="2"   fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.4"/>
        <line x1="69" y1="36" x2="70" y2="43" stroke="#C5A55A" strokeWidth="0.6" opacity="0.65"/>
        <circle cx="70" cy="44.5" r="1.5" fill="#C5A55A"/>

        {/* ════ HERALDIC SHIELD ════ */}

        {/* Shield base */}
        <path d="M12,26 H68 V65 C68,83 40,97 40,97 C40,97 12,83 12,65 Z" fill="#0D1A2E"/>

        <g clipPath="url(#ssc-hero-shield)">

          {/* LEFT: 8 alternating silver / red stripes */}
          <rect x="12" y="26" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="35" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="44" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="53" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="62" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="71" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="80" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="89" width="28" height="9" fill="#CE2939"/>

          {/* RIGHT: red field */}
          <rect x="40" y="26" width="28" height="71" fill="#CE2939"/>

          {/* Apostolic double cross — white, prominent in red field */}
          {/* Vertical bar */}
          <rect x="52.5" y="44"   width="3"   height="32" rx="0.6" fill="#FFFFFF"/>
          {/* Upper arm (shorter) */}
          <rect x="47.5" y="50.5" width="11"  height="2.5" rx="0.5" fill="#FFFFFF"/>
          {/* Lower arm (longer) */}
          <rect x="45.5" y="58"   width="15"  height="2.5" rx="0.5" fill="#FFFFFF"/>

          {/* Gold footing — pedestal at base of cross, sitting on center hill */}
          <rect x="50"   y="72" width="8" height="5" rx="0.5" fill="#D4AF37"/>
          <rect x="51.5" y="69" width="5" height="4" rx="0.3" fill="#C5A55A"/>

          {/* Three green hills */}
          <ellipse cx="43" cy="90" rx="8"  ry="13" fill="#477050"/>
          <ellipse cx="54" cy="85" rx="10" ry="15" fill="#477050"/>
          <ellipse cx="65" cy="90" rx="8"  ry="13" fill="#477050"/>

        </g>

        {/* Center divider */}
        <line x1="40" y1="26" x2="40" y2="90" stroke="#C5A55A" strokeWidth="0.8" opacity="0.9"/>

        {/* Shield border */}
        <path
          d="M12,26 H68 V65 C68,83 40,97 40,97 C40,97 12,83 12,65 Z"
          fill="none" stroke="#C5A55A" strokeWidth="1.5"
        />
      </motion.svg>
    </div>
  );
}
