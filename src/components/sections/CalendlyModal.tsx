"use client";

// CalendlyModal — slides up when user picks a date+time on ConsulateCalendar
// Placeholder mode (URL contains "PLACEHOLDER"): shows confirmation holding state
// Live mode: Calendly iframe pre-filled with selected date via ?date=YYYY-MM-DD
// Source: Adapted from enchanted-madison/AcuityModal pattern

import { motion, AnimatePresence } from "framer-motion";
import { siteData } from "@/data/site";

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | null;
  selectedTime: string | null;
  /** Quiz answers or other context to pre-fill into Calendly's first custom question (a1) */
  prefillNotes?: string;
}

function fmtDate(d: Date) {
  return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

export function CalendlyModal({ isOpen, onClose, selectedDate, selectedTime, prefillNotes }: CalendlyModalProps) {
  const { calendlyUrl } = siteData.booking;
  const isLive = Boolean(calendlyUrl) && !calendlyUrl.includes("PLACEHOLDER");

  // Build Calendly URL with date pre-select + brand colours + optional quiz notes
  const src = (() => {
    if (!isLive || !selectedDate) return "";
    const params = new URLSearchParams({
      date: `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`,
      hide_event_type_details: "1",
      hide_gdpr_banner: "1",
      background_color: "071020",
      text_color: "F5F0E8",
      primary_color: "C5A55A",
    });
    // a1 maps to Calendly's first custom question — pre-fills quiz summary or notes
    if (prefillNotes) params.set("a1", prefillNotes);
    return `${calendlyUrl}?${params.toString()}`;
  })();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50"
            style={{ background: "rgba(7,16,32,0.82)" }}
            onClick={onClose}
          />

          {/* Panel — bottom sheet on mobile, centered modal on md+ */}
          <motion.div
            key="panel"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeOut" as const }}
            className="fixed bottom-0 left-0 right-0 z-50 rounded-t-[6px] overflow-hidden
                       md:bottom-auto md:top-1/2 md:left-1/2 md:right-auto md:rounded-[4px]"
            style={{
              background: "#071020",
              border: "1px solid rgba(197,165,90,0.25)",
              width: "min(100vw, 700px)",
              maxHeight: "92vh",
              // md+ centering — applied via the translate classes below
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(197,165,90,0.15)]">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#C5A55A] mb-0.5">
                  {isLive ? "Complete Your Booking" : "Booking Coming Soon"}
                </p>
                {selectedDate && (
                  <p className="font-display font-semibold text-[15px] text-[#F5F0E8]">
                    {fmtDate(selectedDate)}{selectedTime ? ` · ${selectedTime}` : ""}
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="w-8 h-8 rounded-full bg-[#1B2A4A] flex items-center justify-center text-[rgba(245,240,232,0.6)] hover:text-[#F5F0E8] transition-colors duration-150"
              >
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M1.5 1.5l8 8M9.5 1.5l-8 8" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto" style={{ maxHeight: "calc(92vh - 68px)" }}>
              {isLive ? (
                <iframe
                  src={src}
                  width="100%"
                  height="620"
                  frameBorder="0"
                  title="Book your consular appointment"
                  style={{ display: "block", minHeight: 520 }}
                />
              ) : (
                /* Placeholder / pre-launch holding state */
                <div className="p-8 flex flex-col items-center gap-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-[rgba(197,165,90,0.1)] border border-[rgba(197,165,90,0.35)] flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <rect x="3" y="4" width="16" height="15" rx="2" stroke="#C5A55A" strokeWidth="1.5"/>
                      <path d="M3 9h16" stroke="#C5A55A" strokeWidth="1.5"/>
                      <path d="M8 2v4M14 2v4" stroke="#C5A55A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-[1.4rem] text-[#F5F0E8] mb-2">
                      Online Booking Launching Soon
                    </h3>
                    <p className="font-body text-[14px] text-[rgba(245,240,232,0.6)] max-w-sm leading-relaxed">
                      You selected{" "}
                      <strong className="text-[#C5A55A]">
                        {selectedDate ? fmtDate(selectedDate) : ""}
                        {selectedTime ? ` at ${selectedTime}` : ""}
                      </strong>
                      . Until online scheduling is live, contact Sylvia directly to reserve this slot.
                    </p>
                  </div>

                  <div className="w-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-5 space-y-3 text-left max-w-xs">
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)]">
                      Reserve by Email
                    </p>
                    <a
                      href={`mailto:${siteData.brand.email}?subject=Appointment Request — ${selectedDate ? fmtDate(selectedDate) : ""}&body=I would like to book the ${selectedTime ?? ""} slot on ${selectedDate ? fmtDate(selectedDate) : ""}.`}
                      className="block font-body text-[14px] text-[#C5A55A] hover:text-[#D4AF37] transition-colors duration-150 underline underline-offset-4"
                    >
                      {siteData.brand.email}
                    </a>
                    <p className="font-body text-[12px] text-[rgba(245,240,232,0.35)]">
                      Include your requested date in the subject line. Sylvia responds within one business day.
                    </p>
                  </div>

                  <button
                    onClick={onClose}
                    className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.35)] hover:text-[rgba(245,240,232,0.6)] transition-colors duration-150 underline underline-offset-4"
                  >
                    Choose a different date
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
