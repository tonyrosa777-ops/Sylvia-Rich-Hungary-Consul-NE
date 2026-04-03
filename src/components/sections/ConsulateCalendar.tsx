"use client";

// ConsulateCalendar — branded Monday-only calendar for /booking page
// Two-column layout: calendar grid left, detail/time-slots right
// On slot select → CalendlyModal slides up with date pre-filled
// Adapted from enchanted-madison/BookingCalendar pattern

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CalendlyModal } from "./CalendlyModal";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function isMonday(d: Date) { return d.getDay() === 1; }
function isPast(d: Date) {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const cmp = new Date(d); cmp.setHours(0, 0, 0, 0);
  return cmp < today;
}
function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}
function fmtDate(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}
function isoDate(d: Date) {
  // Local YYYY-MM-DD without UTC shift
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function buildGrid(year: number, month: number): (Date | null)[] {
  const firstDow = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= days; d++) cells.push(new Date(year, month, d));
  return cells;
}

// Monday afternoon slots — consulate hours
const TIME_SLOTS = ["1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"];
const DAY_ABBR = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

// ─── Slide variants ────────────────────────────────────────────────────────────
const slide = {
  enter: { x: 32, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.24, ease: "easeOut" as const } },
  exit:  { x: -32, opacity: 0, transition: { duration: 0.18, ease: "easeIn" as const } },
};

// ─── Props ────────────────────────────────────────────────────────────────────
interface ConsulateCalendarProps {
  /** Pre-filled notes passed from quiz results — forwarded into Calendly URL */
  prefillNotes?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export function ConsulateCalendar({ prefillNotes }: ConsulateCalendarProps) {
  const today = new Date();
  const [viewYear, setViewYear]   = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selected, setSelected]   = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const grid = useMemo(() => buildGrid(viewYear, viewMonth), [viewYear, viewMonth]);

  const mondaysThisMonth = useMemo(
    () => grid.filter((d): d is Date => d !== null && isMonday(d) && !isPast(d)).length,
    [grid]
  );

  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    new Date(viewYear, viewMonth)
  );
  const canGoPrev = !(viewYear === today.getFullYear() && viewMonth <= today.getMonth());

  function prevMonth() {
    if (!canGoPrev) return;
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
    setSelected(null); setSelectedTime(null);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
    setSelected(null); setSelectedTime(null);
  }
  function pickDate(d: Date) {
    if (!isMonday(d) || isPast(d)) return;
    setSelected(d);
    setSelectedTime(null);
  }
  function pickTime(slot: string) {
    setSelectedTime(slot);
    setModalOpen(true);
  }
  function reset() {
    setSelected(null);
    setSelectedTime(null);
  }

  return (
    <>
      <div className="rounded-[4px] overflow-hidden border border-[rgba(197,165,90,0.2)]"
           style={{ background: "#0A1628" }}>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_300px]">

          {/* ── Calendar column ── */}
          <div className="p-6 lg:p-8">

            {/* Month nav */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                disabled={!canGoPrev}
                aria-label="Previous month"
                className="w-8 h-8 rounded-[3px] bg-[#1B2A4A] flex items-center justify-center text-[rgba(197,165,90,0.6)] hover:text-[#C5A55A] disabled:opacity-20 transition-colors duration-150"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M8 2L3 6l5 4" />
                </svg>
              </button>
              <span className="font-display font-semibold text-[1rem] text-[#F5F0E8]">
                {monthLabel} {viewYear}
              </span>
              <button
                onClick={nextMonth}
                aria-label="Next month"
                className="w-8 h-8 rounded-[3px] bg-[#1B2A4A] flex items-center justify-center text-[rgba(197,165,90,0.6)] hover:text-[#C5A55A] transition-colors duration-150"
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M4 2l5 4-5 4" />
                </svg>
              </button>
            </div>

            {/* Day-of-week headers */}
            <div className="grid grid-cols-7 mb-1">
              {DAY_ABBR.map((d, i) => (
                <div
                  key={d}
                  className={cn(
                    "text-center font-mono text-[9px] uppercase tracking-[0.1em] py-1",
                    i === 1 ? "text-[#C5A55A]" : "text-[rgba(245,240,232,0.2)]"
                  )}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* Day cells */}
            <div className="grid grid-cols-7 gap-y-0.5">
              {grid.map((cell, idx) => {
                if (!cell) return <div key={`e-${idx}`} />;
                const monday    = isMonday(cell);
                const past      = isPast(cell);
                const isSelected = selected ? sameDay(cell, selected) : false;
                const clickable  = monday && !past;

                return (
                  <button
                    key={cell.toISOString()}
                    disabled={!clickable}
                    onClick={() => pickDate(cell)}
                    className={cn(
                      "aspect-square mx-auto w-9 h-9 flex items-center justify-center rounded-[3px] font-mono text-[12px] transition-all duration-150",
                      isSelected
                        ? "bg-[#C5A55A] text-[#0A1628] font-bold"
                        : clickable
                        ? "text-[#C5A55A] border border-[rgba(197,165,90,0.3)] hover:bg-[rgba(197,165,90,0.12)]"
                        : past && monday
                        ? "text-[rgba(197,165,90,0.2)] cursor-not-allowed"
                        : "text-[rgba(245,240,232,0.15)] cursor-default"
                    )}
                  >
                    {cell.getDate()}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-5 mt-5 pt-4 border-t border-[rgba(197,165,90,0.1)]">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-[2px] border border-[rgba(197,165,90,0.4)] inline-block" />
                <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.35)]">Monday</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-[2px] bg-[#C5A55A] inline-block" />
                <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.35)]">Selected</span>
              </div>
              <span className="ml-auto font-mono text-[9px] text-[rgba(197,165,90,0.5)] tracking-[0.06em]">
                {mondaysThisMonth} Monday{mondaysThisMonth !== 1 ? "s" : ""} available
              </span>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="hidden md:block bg-[rgba(197,165,90,0.12)]" />

          {/* ── Detail / time-slot column ── */}
          <div
            className="border-t md:border-t-0 border-[rgba(197,165,90,0.12)] p-6 lg:p-8 flex flex-col"
          >
            <AnimatePresence mode="wait">
              {!selected ? (
                <motion.div
                  key="prompt"
                  variants={slide} initial="enter" animate="center" exit="exit"
                  className="flex flex-col items-center justify-center h-full text-center gap-4 py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.25)] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="3" width="14" height="13" rx="1.5" stroke="#C5A55A" strokeWidth="1.25"/>
                      <path d="M2 7h14" stroke="#C5A55A" strokeWidth="1.25"/>
                      <path d="M6 1v3M12 1v3" stroke="#C5A55A" strokeWidth="1.25" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-[1rem] text-[#F5F0E8] mb-1">
                      Select a Monday
                    </p>
                    <p className="font-body text-[13px] text-[rgba(245,240,232,0.45)] leading-relaxed">
                      All appointments are Monday afternoons. Choose a date to see available times.
                    </p>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.5)]">
                    In-person · Derry, NH
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="slots"
                  variants={slide} initial="enter" animate="center" exit="exit"
                >
                  {/* Back */}
                  <button
                    onClick={reset}
                    className="flex items-center gap-1.5 mb-5 font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.4)] hover:text-[rgba(245,240,232,0.7)] transition-colors duration-150"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75">
                      <path d="M8 2L3 6l5 4" />
                    </svg>
                    Back
                  </button>

                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#C5A55A] mb-1">
                    {fmtDate(selected)}
                  </p>
                  <p className="font-display font-semibold text-[1rem] text-[#F5F0E8] mb-5">
                    Choose a Time
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SLOTS.map(slot => (
                      <button
                        key={slot}
                        onClick={() => pickTime(slot)}
                        className="rounded-[3px] py-2.5 font-mono text-[11px] border border-[rgba(197,165,90,0.22)] text-[rgba(245,240,232,0.65)] hover:border-[#C5A55A] hover:text-[#C5A55A] hover:bg-[rgba(197,165,90,0.06)] transition-all duration-150"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>

                  <p className="font-body text-[11px] text-[rgba(245,240,232,0.3)] mt-5 leading-relaxed">
                    Cash or check only. Do not sign documents in advance.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <CalendlyModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setSelectedTime(null); }}
        selectedDate={selected}
        selectedTime={selectedTime}
        prefillNotes={prefillNotes}
      />
    </>
  );
}
