"use client";
import { motion } from "framer-motion";

/**
 * St. Stephen's Crown — animated hero crest.
 * Inline SVG so Framer Motion can drive per-element animations.
 *
 * Crown features accurate to the Holy Crown of Hungary (Szent Korona):
 *   - Tilted/bent apostolic double cross (the crown's defining characteristic)
 *   - Byzantine enamel panels on lower band
 *   - Pendilia (hanging chain ornaments) on both sides
 * Shield features Hungarian heraldic arms:
 *   - Left (dexter): 8 alternating silver / red horizontal stripes
 *   - Right (sinister): red field, three green hills, apostolic double cross
 */
export function StStephensCrest() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">

      {/* Breathing glow behind crest */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 60% 70% at 50% 55%, rgba(197,165,90,0.14) 0%, transparent 70%)",
        }}
        animate={{ opacity: [1, 1.7, 1], scale: [1, 1.04, 1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* Thin gold ring border */}
      <div
        className="absolute inset-[-10px] rounded-full border border-[rgba(197,165,90,0.15)]"
        aria-hidden="true"
      />

      {/* Crest SVG — fades and scales in on mount */}
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

        {/* Crown base band */}
        <motion.rect
          x="18" y="20" width="44" height="7" rx="1.5" fill="#C5A55A"
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          style={{ transformOrigin: "40px 23.5px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        />

        {/* Enamel panels */}
        <rect x="20"  y="21.5" width="6"  height="4" rx="0.5" fill="#0D1A2E" stroke="#D4AF37" strokeWidth="0.3"/>
        <rect x="28"  y="21.5" width="5"  height="4" rx="0.5" fill="#CE2939" stroke="#D4AF37" strokeWidth="0.3"/>
        <rect x="35"  y="21.5" width="10" height="4" rx="0.5" fill="#0D1A2E" stroke="#D4AF37" strokeWidth="0.3"/>
        <rect x="47"  y="21.5" width="5"  height="4" rx="0.5" fill="#CE2939" stroke="#D4AF37" strokeWidth="0.3"/>
        <rect x="54"  y="21.5" width="6"  height="4" rx="0.5" fill="#0D1A2E" stroke="#D4AF37" strokeWidth="0.3"/>

        {/* Left arch */}
        <motion.path
          d="M22,20 C22,20 19,13 24,9 C29,5 33,9 31,14 C30,17 30,20 30,20 Z"
          fill="#C5A55A"
          initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
        />
        <circle cx="24" cy="8.5" r="2.5" fill="#D4AF37"/>
        <circle cx="24" cy="8.5" r="1"   fill="#C5A55A"/>

        {/* Center arch */}
        <motion.path
          d="M32,20 C32,20 30,9 36,4 C38,2 42,2 44,4 C50,9 48,20 48,20 Z"
          fill="#D4AF37"
          initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.6, ease: "easeOut" }}
        />
        <circle cx="40" cy="3.5" r="2.5" fill="#D4AF37" stroke="#F5F0E8" strokeWidth="0.5"/>

        {/* Right arch */}
        <motion.path
          d="M50,20 C50,20 50,17 49,14 C47,9 51,5 56,9 C61,13 58,20 58,20 Z"
          fill="#C5A55A"
          initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease: "easeOut" }}
        />
        <circle cx="56" cy="8.5" r="2.5" fill="#D4AF37"/>
        <circle cx="56" cy="8.5" r="1"   fill="#C5A55A"/>

        {/*
          TILTED CROSS — defining feature of St. Stephen's Crown.
          The apostolic double cross is bent ~22° clockwise (historically
          the cross was knocked and left bent — it became the crown's signature).
        */}
        <motion.g
          transform="rotate(22, 40, 3)"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ transformOrigin: "40px 3px" }}
          transition={{ duration: 0.5, delay: 0.85, ease: "easeOut" }}
        >
          <rect x="38.8" y="-5"   width="2.4" height="13" rx="0.7" fill="#D4AF37"/>
          <rect x="35.5" y="-2.5" width="9"   height="2"  rx="0.6" fill="#D4AF37"/>
          <rect x="33.5" y="2.5"  width="13"  height="2"  rx="0.6" fill="#D4AF37"/>
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

        {/* Shield base fill */}
        <path d="M12,26 H68 V65 C68,83 40,97 40,97 C40,97 12,83 12,65 Z" fill="#0D1A2E"/>

        {/* Shield contents — clipped */}
        <g clipPath="url(#ssc-hero-shield)">

          {/* LEFT: 8 alternating silver / red horizontal stripes */}
          <rect x="12" y="26" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="35" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="44" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="53" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="62" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="71" width="28" height="9" fill="#CE2939"/>
          <rect x="12" y="80" width="28" height="9" fill="#E8E3D5"/>
          <rect x="12" y="89" width="28" height="9" fill="#CE2939"/>

          {/* RIGHT: red field */}
          <rect x="40" y="26" width="28" height="60" fill="#CE2939"/>

          {/* Three green hills */}
          <ellipse cx="44" cy="85" rx="7"  ry="12" fill="#477050"/>
          <ellipse cx="54" cy="79" rx="9"  ry="15" fill="#477050"/>
          <ellipse cx="65" cy="85" rx="7"  ry="12" fill="#477050"/>

          {/* Apostolic double cross on center hill */}
          <rect x="53"   y="55"   width="2.2"  height="23" rx="0.6" fill="#E8E3D5"/>
          <rect x="49.5" y="59"   width="9.2"  height="2"  rx="0.5" fill="#E8E3D5"/>
          <rect x="48"   y="65.5" width="12.2" height="2"  rx="0.5" fill="#E8E3D5"/>

        </g>

        {/* Vertical center divider */}
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
