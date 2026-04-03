"use client";
import { useState, useMemo } from "react";
import { siteData } from "@/data/site";
import { PageHeader, Button, Eyebrow, GoldRule } from "@/components/ui";
import { FadeUp } from "@/components/animations";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/useTranslation";
import { type Locale } from "@/lib/i18n";

// ─── Types ───────────────────────────────────────────────────────────────────

type Step = "select-service" | "select-date" | "your-info" | "confirm" | "done";

interface BookingState {
  service: string;
  date: Date | null;
  timeSlot: string;
  name: string;
  email: string;
  notes: string;
}

const INITIAL_STATE: BookingState = {
  service: "",
  date: null,
  timeSlot: "",
  name: "",
  email: "",
  notes: "",
};

// Monday afternoon slots
const TIME_SLOTS = [
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();
}

function isMonday(d: Date) {
  return d.getDay() === 1;
}

function isPastDate(d: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return d < today;
}

function getCalendarDays(year: number, month: number): (Date | null)[] {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  return cells;
}

function formatDate(d: Date, locale: Locale) {
  const jsLocale = locale === "hu" ? "hu-HU" : "en-US";
  return d.toLocaleDateString(jsLocale, { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepIndicator({ step }: { step: Step }) {
  const { t } = useTranslation("booking");
  const steps: { id: Step; label: string }[] = [
    { id: "select-service", label: t("steps.selectService") },
    { id: "select-date", label: t("steps.selectDate") },
    { id: "your-info", label: t("steps.yourInfo") },
    { id: "confirm", label: t("steps.confirm") },
  ];
  const order: Step[] = ["select-service", "select-date", "your-info", "confirm", "done"];
  const currentIdx = order.indexOf(step);

  return (
    <div className="flex items-center gap-0 mb-10">
      {steps.map((s, i) => {
        const idx = order.indexOf(s.id);
        const done = currentIdx > idx;
        const active = currentIdx === idx;
        return (
          <div key={s.id} className="flex items-center">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={cn(
                  "w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300",
                  done
                    ? "bg-[#C5A55A] border-[#C5A55A]"
                    : active
                    ? "bg-transparent border-[#C5A55A]"
                    : "bg-transparent border-[rgba(197,165,90,0.2)]"
                )}
              >
                {done ? (
                  <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                    <path d="M1 4.5L4 7.5L10 1.5" stroke="#0A1628" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span className={cn(
                    "font-mono text-[10px]",
                    active ? "text-[#C5A55A]" : "text-[rgba(197,165,90,0.3)]"
                  )}>{i + 1}</span>
                )}
              </div>
              <span className={cn(
                "font-mono text-[9px] uppercase tracking-[0.1em] hidden sm:block",
                active ? "text-[#C5A55A]" : done ? "text-[rgba(197,165,90,0.6)]" : "text-[rgba(197,165,90,0.2)]"
              )}>{s.label}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={cn(
                "h-px w-12 sm:w-16 lg:w-20 mx-2 transition-all duration-300",
                done ? "bg-[rgba(197,165,90,0.5)]" : "bg-[rgba(197,165,90,0.12)]"
              )} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ServiceStep({
  booking,
  onChange,
  onNext,
}: {
  booking: BookingState;
  onChange: (k: keyof BookingState, v: string) => void;
  onNext: () => void;
}) {
  const { t } = useTranslation("booking");
  const { services } = siteData;
  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[#F5F0E8] mb-2">{t("serviceStep.heading")}</h2>
      <p className="font-body text-[14px] text-[rgba(245,240,232,0.5)] mb-8">
        {t("serviceStep.subheading")}
      </p>
      <div className="space-y-3 mb-8">
        {services.map((svc) => (
          <button
            key={svc.slug}
            type="button"
            onClick={() => onChange("service", svc.slug)}
            className={cn(
              "w-full text-left rounded-[3px] border p-5 transition-all duration-200",
              booking.service === svc.slug
                ? "border-[#C5A55A] bg-[rgba(197,165,90,0.08)]"
                : "border-[rgba(197,165,90,0.15)] bg-[#1B2A4A] hover:border-[rgba(197,165,90,0.35)]"
            )}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="font-display font-bold text-[15px] text-[#F5F0E8]">{svc.name}</span>
                  {svc.nameHu && (
                    <span className="font-body italic text-[12px] text-[rgba(245,240,232,0.35)]">({svc.nameHu})</span>
                  )}
                  {svc.badge && (
                    <span className="font-mono text-[8px] uppercase tracking-[0.12em] bg-[#C5A55A] text-[#0A1628] px-2 py-0.5 rounded-[2px]">
                      {svc.badge}
                    </span>
                  )}
                </div>
                <p className="font-body text-[13px] text-[rgba(245,240,232,0.5)]">{svc.tagline}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="font-mono font-medium text-[1.3rem] leading-none text-[#C5A55A]">{svc.priceDisplay}</span>
                {svc.priceUnit && (
                  <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-[rgba(245,240,232,0.25)] mt-0.5">{svc.priceUnit}</p>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-end">
        <Button variant="primary" size="md" disabled={!booking.service} onClick={onNext}>
          {t("serviceStep.continueButton")}
        </Button>
      </div>
    </div>
  );
}

function DateStep({
  booking,
  onChange,
  onNext,
  onBack,
}: {
  booking: BookingState;
  onChange: (k: keyof BookingState, v: string | Date) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const { t, locale } = useTranslation("booking");
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const cells = useMemo(() => getCalendarDays(viewYear, viewMonth), [viewYear, viewMonth]);

  // Day abbreviations ordered Sun=0 through Sat=6
  const daysShort = [
    t("dateStep.sunday"),
    t("dateStep.monday"),
    t("dateStep.tuesday"),
    t("dateStep.wednesday"),
    t("dateStep.thursday"),
    t("dateStep.friday"),
    t("dateStep.saturday"),
  ];

  // Month name from locale-aware formatting
  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleDateString(
    locale === "hu" ? "hu-HU" : "en-US",
    { month: "long" }
  );

  function prevMonth() {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  }
  function nextMonth() {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  }

  const canGoPrev = !(viewYear === today.getFullYear() && viewMonth <= today.getMonth());

  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[#F5F0E8] mb-2">{t("dateStep.heading")}</h2>
      <p className="font-body text-[14px] text-[rgba(245,240,232,0.5)] mb-8">
        {t("dateStep.subheading")}
      </p>

      {/* Calendar */}
      <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.18)] rounded-[3px] p-6 mb-6">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-5">
          <button
            type="button"
            onClick={prevMonth}
            disabled={!canGoPrev}
            className="w-8 h-8 flex items-center justify-center text-[rgba(197,165,90,0.5)] hover:text-[#C5A55A] disabled:opacity-20 transition-colors"
          >
            ‹
          </button>
          <span className="font-display font-bold text-[15px] text-[#F5F0E8]">
            {monthLabel} {viewYear}
          </span>
          <button
            type="button"
            onClick={nextMonth}
            className="w-8 h-8 flex items-center justify-center text-[rgba(197,165,90,0.5)] hover:text-[#C5A55A] transition-colors"
          >
            ›
          </button>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 mb-2">
          {daysShort.map((d, i) => (
            <div key={i} className={cn(
              "text-center font-mono text-[9px] uppercase tracking-[0.1em] py-1",
              i === 1 ? "text-[#C5A55A]" : "text-[rgba(245,240,232,0.25)]"
            )}>{d}</div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-y-1">
          {cells.map((cell, idx) => {
            if (!cell) return <div key={`empty-${idx}`} />;
            const monday = isMonday(cell);
            const past = isPastDate(cell);
            const selected = booking.date ? isSameDay(cell, booking.date) : false;
            const disabled = !monday || past;

            return (
              <button
                key={cell.toISOString()}
                type="button"
                disabled={disabled}
                onClick={() => { onChange("date", cell); onChange("timeSlot", ""); }}
                className={cn(
                  "aspect-square flex items-center justify-center rounded-[2px] font-mono text-[12px] transition-all duration-150 mx-auto w-8 h-8",
                  selected
                    ? "bg-[#C5A55A] text-[#0A1628] font-bold"
                    : monday && !past
                    ? "text-[#C5A55A] hover:bg-[rgba(197,165,90,0.15)] border border-[rgba(197,165,90,0.3)]"
                    : "text-[rgba(245,240,232,0.2)] cursor-not-allowed"
                )}
              >
                {cell.getDate()}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      <AnimatePresence mode="wait">
        {booking.date && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-8"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-3">
              {t("dateStep.availableTimesLabel")} — {formatDate(booking.date, locale)}
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
              {TIME_SLOTS.map((slot) => (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onChange("timeSlot", slot)}
                  className={cn(
                    "rounded-[3px] py-2 font-mono text-[11px] border transition-all duration-150",
                    booking.timeSlot === slot
                      ? "bg-[#C5A55A] border-[#C5A55A] text-[#0A1628] font-bold"
                      : "border-[rgba(197,165,90,0.2)] text-[rgba(245,240,232,0.6)] hover:border-[#C5A55A] hover:text-[#C5A55A]"
                  )}
                >
                  {slot}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between">
        <Button variant="ghost" size="md" onClick={onBack}>{t("buttons.back")}</Button>
        <Button variant="primary" size="md" disabled={!booking.date || !booking.timeSlot} onClick={onNext}>
          {t("dateStep.continueButton")}
        </Button>
      </div>
    </div>
  );
}

function InfoStep({
  booking,
  onChange,
  onNext,
  onBack,
}: {
  booking: BookingState;
  onChange: (k: keyof BookingState, v: string) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const { t } = useTranslation("booking");
  const labelClass = "block font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-2";
  const inputClass = cn(
    "w-full bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px]",
    "px-4 py-3 font-body text-[14px] text-[#F5F0E8] placeholder:text-[rgba(245,240,232,0.25)]",
    "focus:outline-none focus:border-[#C5A55A] transition-colors duration-150"
  );

  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[#F5F0E8] mb-2">{t("infoStep.heading")}</h2>
      <p className="font-body text-[14px] text-[rgba(245,240,232,0.5)] mb-8">
        {t("infoStep.subheading")}
      </p>
      <div className="space-y-5 mb-8">
        <div>
          <label className={labelClass}>{t("infoStep.fullName")}</label>
          <input
            type="text"
            value={booking.name}
            onChange={(e) => onChange("name", e.target.value)}
            placeholder={t("infoStep.namePlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>{t("infoStep.emailAddress")}</label>
          <input
            type="email"
            value={booking.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder={t("infoStep.emailPlaceholder")}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>{t("infoStep.notes")}</label>
          <textarea
            rows={3}
            value={booking.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            placeholder={t("infoStep.notesPlaceholder")}
            className={cn(inputClass, "resize-none")}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="ghost" size="md" onClick={onBack}>{t("buttons.back")}</Button>
        <Button
          variant="primary"
          size="md"
          disabled={!booking.name.trim() || !booking.email.trim()}
          onClick={onNext}
        >
          {t("infoStep.continueButton")}
        </Button>
      </div>
    </div>
  );
}

function ConfirmStep({
  booking,
  onConfirm,
  onBack,
}: {
  booking: BookingState;
  onConfirm: () => void;
  onBack: () => void;
}) {
  const { t, locale } = useTranslation("booking");
  const { services, brand } = siteData;
  const service = services.find((s) => s.slug === booking.service);

  const rows = [
    { label: t("confirmStep.service"), value: service ? `${service.name}${service.nameHu ? ` (${service.nameHu})` : ""}` : "" },
    { label: t("confirmStep.date"), value: booking.date ? formatDate(booking.date, locale) : "" },
    { label: t("confirmStep.time"), value: booking.timeSlot },
    { label: t("confirmStep.name"), value: booking.name },
    { label: t("confirmStep.email"), value: booking.email },
    { label: t("confirmStep.fee"), value: service?.priceDisplay ?? "" },
    { label: t("confirmStep.payment"), value: brand.payment },
    { label: t("confirmStep.location"), value: brand.address.full },
  ];

  return (
    <div>
      <h2 className="font-display font-bold text-2xl text-[#F5F0E8] mb-2">{t("confirmStep.heading")}</h2>
      <p className="font-body text-[14px] text-[rgba(245,240,232,0.5)] mb-8">
        {t("confirmStep.subheading")}
      </p>

      <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.25)] rounded-[3px] p-6 mb-6 space-y-4">
        {rows.map(({ label, value }) => (
          <div key={label} className="flex gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.6)] w-20 shrink-0 pt-0.5">{label}</span>
            <span className="font-body text-[14px] text-[rgba(245,240,232,0.75)]">{value}</span>
          </div>
        ))}
        {booking.notes && (
          <div className="flex gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(197,165,90,0.6)] w-20 shrink-0 pt-0.5">{t("confirmStep.notes")}</span>
            <span className="font-body text-[14px] text-[rgba(245,240,232,0.75)]">{booking.notes}</span>
          </div>
        )}
      </div>

      {/* What to bring */}
      {service && (
        <div className="border border-[rgba(197,165,90,0.12)] rounded-[3px] p-5 mb-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#C5A55A] mb-3">{t("confirmStep.bringLabel")}</p>
          <ul className="space-y-1.5">
            {service.whatToBring.map((item) => (
              <li key={item} className="flex gap-2 font-body text-[13px] text-[rgba(245,240,232,0.55)]">
                <span className="text-[#C5A55A] shrink-0">›</span>{item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-between">
        <Button variant="ghost" size="md" onClick={onBack}>{t("buttons.back")}</Button>
        <Button variant="primary" size="lg" onClick={onConfirm}>
          {t("confirmStep.confirmButton")}
        </Button>
      </div>
    </div>
  );
}

function DoneStep({ booking }: { booking: BookingState }) {
  const { t, locale } = useTranslation("booking");
  const { services, brand } = siteData;
  const service = services.find((s) => s.slug === booking.service);

  return (
    <div className="text-center">
      <div className="w-16 h-16 rounded-full bg-[rgba(197,165,90,0.12)] border border-[#C5A55A] flex items-center justify-center mx-auto mb-6">
        <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
          <path d="M2 11L10 19L26 3" stroke="#C5A55A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h2 className="font-display font-bold text-3xl text-[#F5F0E8] mb-3">{t("doneStep.heading")}</h2>
      <p className="font-body text-[15px] text-[rgba(245,240,232,0.6)] mb-8 max-w-md mx-auto">
        {t("doneStep.confirmationPrefix")}{" "}
        <strong className="text-[rgba(245,240,232,0.85)]">{booking.email}</strong>{" "}
        {t("doneStep.confirmationSuffix")}
      </p>

      <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.2)] rounded-[3px] p-6 text-left max-w-sm mx-auto mb-8">
        <div className="space-y-3">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-1">{t("doneStep.serviceLabel")}</p>
            <p className="font-body text-[14px] text-[#F5F0E8]">{service?.name}</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-1">{t("doneStep.whenLabel")}</p>
            <p className="font-body text-[14px] text-[#F5F0E8]">
              {booking.date ? formatDate(booking.date, locale) : ""} at {booking.timeSlot}
            </p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-1">{t("doneStep.whereLabel")}</p>
            <p className="font-body text-[14px] text-[#F5F0E8]">{brand.address.full}</p>
          </div>
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-1">{t("doneStep.paymentLabel")}</p>
            <p className="font-body text-[14px] text-[rgba(245,240,232,0.6)]">{brand.payment}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button href="/services" variant="secondary" size="md">{t("doneStep.viewServices")}</Button>
        <Button href="/" variant="ghost" size="md">{t("doneStep.backToHome")}</Button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const STEP_ORDER: Step[] = ["select-service", "select-date", "your-info", "confirm", "done"];

export default function BookingPage() {
  const { t } = useTranslation("booking");
  const [step, setStep] = useState<Step>("select-service");
  const [booking, setBooking] = useState<BookingState>(INITIAL_STATE);

  function update(key: keyof BookingState, value: string | Date) {
    setBooking((prev) => ({ ...prev, [key]: value }));
  }

  function next() {
    const idx = STEP_ORDER.indexOf(step);
    if (idx < STEP_ORDER.length - 1) setStep(STEP_ORDER[idx + 1]);
  }
  function back() {
    const idx = STEP_ORDER.indexOf(step);
    if (idx > 0) setStep(STEP_ORDER[idx - 1]);
  }

  return (
    <>
      <PageHeader
        eyebrow={t("header.eyebrow")}
        headline={t("header.headline")}
        description={t("header.description")}
      />

      <section className="bg-[#0A1628] py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <FadeUp>
            {step !== "done" && <StepIndicator step={step} />}

            <div className="bg-[#071020] border border-[rgba(197,165,90,0.15)] rounded-[3px] p-8 lg:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -16 }}
                  transition={{ duration: 0.25, ease: "easeOut" as const }}
                >
                  {step === "select-service" && (
                    <ServiceStep booking={booking} onChange={update} onNext={next} />
                  )}
                  {step === "select-date" && (
                    <DateStep booking={booking} onChange={update} onNext={next} onBack={back} />
                  )}
                  {step === "your-info" && (
                    <InfoStep booking={booking} onChange={update} onNext={next} onBack={back} />
                  )}
                  {step === "confirm" && (
                    <ConfirmStep booking={booking} onConfirm={next} onBack={back} />
                  )}
                  {step === "done" && (
                    <DoneStep booking={booking} />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeUp>

          {/* Payment / hours reminder */}
          {step !== "done" && (
            <FadeUp delay={0.2} className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-10">
              {[
                { label: t("reminders.paymentLabel"), value: siteData.brand.payment },
                { label: t("reminders.hoursLabel"), value: siteData.brand.hours.detail },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)] mb-1">{label}</p>
                  <p className="font-body text-[13px] text-[rgba(245,240,232,0.45)]">{value}</p>
                </div>
              ))}
            </FadeUp>
          )}
        </div>
      </section>
    </>
  );
}
