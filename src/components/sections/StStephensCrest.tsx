"use client";
import { motion } from "framer-motion";

/**
 * St. Stephen's Crown — animated hero crest v3.
 *
 * Crown: closed dome/hemisphere (not 3-pronged open crown).
 *   Two arch bands cross the dome; Byzantine enamel portrait panels
 *   are inset on the dome surface. Tilted apostolic double cross at apex.
 * Shield:
 *   Left  — 8 stripes RED first (Gules, four bars Argent)
 *   Right — green field (Vert), white apostolic double cross, small gold
 *           heraldic crown at cross base, three green hills below
 */
export function StStephensCrest() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Breathing glow behind crest */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 55%, rgba(197,165,90,0.13) 0%, transparent 70%)",
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

        {/* ════ ST. STEPHEN'S CROWN — CLOSED DOME ════ */}

        {/* Dome body */}
        <motion.path
          d="M10,26 C10,12 25,1 40,1 C55,1 70,12 70,26 Z"
          fill="#D4AF37"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          style={{ transformOrigin: "40px 26px" }}
          transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
        />

        {/* Front equator arch (3-D dome illusion) */}
        <path
          d="M10,26 C22,15 30,11 40,10 C50,11 58,15 70,26"
          fill="none" stroke="#B8943A" strokeWidth="1.2" opacity="0.7"
        />

        {/* Meridian arches */}
        <path d="M40,1 C37,5 35,14 35,26" fill="none" stroke="#B8943A" strokeWidth="0.8" opacity="0.45"/>
        <path d="M40,1 C43,5 45,14 45,26" fill="none" stroke="#B8943A" strokeWidth="0.8" opacity="0.45"/>

        {/* Enamel portrait medallions on dome */}
        {/* Center — blue */}
        <rect x="35.5" y="5.5" width="9"   height="10" rx="1.5" fill="#1A3F7A" stroke="#D4AF37" strokeWidth="0.5"/>
        <rect x="37"   y="7"   width="6"   height="7"  rx="1"   fill="#2655A0"/>
        {/* Left — red */}
        <rect x="22"   y="11"  width="7.5" height="9"  rx="1.5" fill="#CE2939" stroke="#D4AF37" strokeWidth="0.5"/>
        <rect x="23.5" y="12.5" width="4.5" height="6" rx="1"   fill="#E03C4E"/>
        {/* Right — red */}
        <rect x="50.5" y="11"  width="7.5" height="9"  rx="1.5" fill="#CE2939" stroke="#D4AF37" strokeWidth="0.5"/>
        <rect x="52"   y="12.5" width="4.5" height="6" rx="1"   fill="#E03C4E"/>
        {/* Far-left — blue */}
        <rect x="13" y="17" width="6" height="7" rx="1.2" fill="#1A3F7A" stroke="#D4AF37" strokeWidth="0.4"/>
        {/* Far-right — blue */}
        <rect x="61" y="17" width="6" height="7" rx="1.2" fill="#1A3F7A" stroke="#D4AF37" strokeWidth="0.4"/>

        {/* Lower circlet/band */}
        <motion.rect
          x="10" y="21" width="60" height="7" rx="2" fill="#C5A55A"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          style={{ transformOrigin: "40px 24.5px" }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        />
        {/* Band gems */}
        <circle cx="14.5" cy="24.5" r="2.3" fill="#1A3F7A" stroke="#F5F0E8" strokeWidth="0.3"/>
        <circle cx="22"   cy="24.5" r="2.3" fill="#CE2939" stroke="#F5F0E8" strokeWidth="0.3"/>
        <circle cx="30"   cy="24.5" r="2.3" fill="#1A3F7A" stroke="#F5F0E8" strokeWidth="0.3"/>
        <circle cx="40"   cy="24.5" r="2.3" fill="#1B6B30" stroke="#F5F0E8" strokeWidth="0.3"/>
        <circle cx="50"   cy="24.5" r="2.3" fill="#1A3F7A" stroke="#F5F0E8" strokeWidth="0.3"/>
        <circle cx="58"   cy="24.5" r="2.3" fill="#CE2939" stroke="#F5F0E8" strokeWidth="0.3"/>
        <circle cx="65.5" cy="24.5" r="2.3" fill="#1A3F7A" stroke="#F5F0E8" strokeWidth="0.3"/>

        {/* Tilted cross at dome apex */}
        <motion.g
          transform="rotate(22, 40, 1)"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: "40px 1px" }}
          transition={{ duration: 0.4, delay: 0.85, ease: "easeOut" }}
        >
          <rect x="38.8" y="-7"  width="2.4" height="13"  rx="0.7" fill="#D4AF37"/>
          <rect x="35"   y="-4"  width="10"  height="2.2" rx="0.6" fill="#D4AF37"/>
          <rect x="33"   y="1.5" width="14"  height="2.2" rx="0.6" fill="#D4AF37"/>
        </motion.g>

        {/* Pendilia — left */}
        <line x1="10" y1="24" x2="4"  y2="35" stroke="#C5A55A" strokeWidth="0.7" opacity="0.85"/>
        <circle cx="4"  cy="36"   r="2"   fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.4"/>
        <line x1="4"  y1="38" x2="3"  y2="46" stroke="#C5A55A" strokeWidth="0.6" opacity="0.65"/>
        <circle cx="3"  cy="47.5" r="1.5" fill="#C5A55A"/>

        {/* Pendilia — right */}
        <line x1="70" y1="24" x2="76" y2="35" stroke="#C5A55A" strokeWidth="0.7" opacity="0.85"/>
        <circle cx="76" cy="36"   r="2"   fill="#C5A55A" stroke="#D4AF37" strokeWidth="0.4"/>
        <line x1="76" y1="38" x2="77" y2="46" stroke="#C5A55A" strokeWidth="0.6" opacity="0.65"/>
        <circle cx="77" cy="47.5" r="1.5" fill="#C5A55A"/>

        {/* ════ HERALDIC SHIELD ════ */}

        <path d="M12,26 H68 V65 C68,83 40,97 40,97 C40,97 12,83 12,65 Z" fill="#0D1A2E"/>

        <g clipPath="url(#ssc-hero-shield)">

          {/* LEFT: 8 stripes — RED FIRST */}
          <rect x="12" y="26" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="35" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="44" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="53" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="62" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="71" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="80" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="89" width="28" height="9" fill="#E8E3D5"/>

          {/* RIGHT: green field (Vert) */}
          <rect x="40" y="26" width="28" height="71" fill="#477050"/>

          {/* Three green hills — behind cross and small crown */}
          <ellipse cx="43" cy="92" rx="8"  ry="13" fill="#3A6044"/>
          <ellipse cx="54" cy="88" rx="10" ry="14" fill="#3A6044"/>
          <ellipse cx="65" cy="92" rx="8"  ry="13" fill="#3A6044"/>

          {/* Apostolic double cross — white, prominent in green field */}
          <rect x="52.5" y="36"  width="3"  height="36" rx="0.6" fill="#FFFFFF"/>
          <rect x="47.5" y="43"  width="11" height="2.5" rx="0.5" fill="#FFFFFF"/>
          <rect x="45.5" y="51"  width="15" height="2.5" rx="0.5" fill="#FFFFFF"/>

          {/* Small heraldic crown at cross base */}
          <path
            d="M47,77 L47,73 L50,68 L52.5,73 L54,65 L55.5,73 L58,68 L61,73 L61,77 Z"
            fill="#D4AF37"
          />
          <rect x="47" y="73" width="14" height="5" rx="0.5" fill="#C5A55A"/>
          <circle cx="50.5" cy="75.5" r="1.3" fill="#CE2939"/>
          <circle cx="54"   cy="75.5" r="1.3" fill="#1A3F7A"/>
          <circle cx="57.5" cy="75.5" r="1.3" fill="#CE2939"/>

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
