"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { GoldRule, Button } from "@/components/ui";
import { useTranslation } from "@/hooks/useTranslation";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = "q0" | "q1" | "q2" | "contact" | "success";
type Answers = Partial<Record<"q0" | "q1" | "q2", string>>;
type ResultKey =
  | "authentication"
  | "citizenship"
  | "vital-records"
  | "legalization"
  | "certificates"
  | "scope"
  | "outside";

interface QuizOption {
  value: string;
  label: string;
  detail: string;
}

interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

interface QuizResult {
  eyebrow: string;
  heading: string;
  body: string;
  cta: string;
  secondary: string;
}

const RESULT_HREFS: Record<ResultKey, { primary: string; secondary: string }> = {
  authentication:  { primary: "/booking",              secondary: "/services" },
  citizenship:     { primary: "/services/citizenship",  secondary: "/booking" },
  "vital-records": { primary: "/services/vital-records", secondary: "/booking" },
  legalization:    { primary: "/services/legalization", secondary: "/booking" },
  certificates:    { primary: "/services/certificates", secondary: "/booking" },
  scope:           { primary: "/services/scope",        secondary: "/booking" },
  outside:         { primary: "/services/scope",        secondary: "/booking" },
};

const STEPS: Step[] = ["q0", "q1", "q2", "contact"];
const TOTAL = STEPS.length;

// ─── Result logic ─────────────────────────────────────────────────────────────

function getResult(answers: Answers): ResultKey {
  if (answers.q2 === "outside") return "outside";
  if (answers.q0 === "citizenship") return "citizenship";
  if (answers.q0 === "vital-records") return "vital-records";
  if (answers.q0 === "legalization") return "legalization";
  if (answers.q0 === "certificates") return "certificates";
  if (answers.q0 === "unsure") return "scope";
  return "authentication";
}

// ─── Slide variants ───────────────────────────────────────────────────────────

const slideVariants = {
  enter: (dir: number) => ({ x: dir * 48, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.26, ease: "easeOut" as const } },
  exit: (dir: number) => ({ x: dir * -48, opacity: 0, transition: { duration: 0.18, ease: "easeIn" as const } }),
};

// ─── Component ────────────────────────────────────────────────────────────────

export function QuizWizard() {
  const { t, ta } = useTranslation("quiz");

  const [step, setStep] = useState<Step>("q0");
  const [direction, setDirection] = useState(1);
  const [answers, setAnswers] = useState<Answers>({});
  const [pendingAnswer, setPendingAnswer] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const stepIndex = step === "success" ? TOTAL : STEPS.indexOf(step);
  const progressPct = (stepIndex / TOTAL) * 100;

  const q0 = ta<QuizQuestion>("questions.q0");
  const q1 = ta<QuizQuestion>("questions.q1");
  const q2 = ta<QuizQuestion>("questions.q2");
  const questions: Record<string, QuizQuestion> = { q0, q1, q2 };

  const resultKey = getResult(answers);
  const result = ta<QuizResult>(`results.${resultKey}`);
  const hrefs = RESULT_HREFS[resultKey];

  function advance(next: Step) {
    setDirection(1);
    setStep(next);
  }

  function goBack() {
    setDirection(-1);
    const idx = STEPS.indexOf(step as (typeof STEPS)[number]);
    if (idx > 0) setStep(STEPS[idx - 1]);
  }

  function handleAnswer(qKey: "q0" | "q1" | "q2", value: string, next: Step) {
    setPendingAnswer(value);
    setTimeout(() => {
      setAnswers((prev) => ({ ...prev, [qKey]: value }));
      setPendingAnswer(null);
      advance(next);
    }, 180);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setEmailError(t("contact.emailError"));
      return;
    }
    setEmailError("");
    setSubmitting(true);
    try {
      await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, note, answers, recommendation: resultKey }),
      });
    } catch {
      // Graceful degradation — show result regardless
    }
    advance("success");
    setSubmitting(false);
  }

  function restart() {
    setDirection(-1);
    setStep("q0");
    setAnswers({});
    setName("");
    setEmail("");
    setNote("");
    setEmailError("");
  }

  // ─── Option card ──────────────────────────────────────────────────────────

  function OptionCard({
    opt,
    selected,
    onClick,
  }: {
    opt: QuizOption;
    selected: boolean;
    onClick: () => void;
  }) {
    return (
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.97 }}
        className={[
          "w-full text-left p-4 rounded-[3px] border transition-all duration-150 group",
          selected
            ? "bg-[rgba(197,165,90,0.12)] border-[#C5A55A]"
            : "bg-[rgba(255,255,255,0.03)] border-[rgba(197,165,90,0.2)] hover:border-[rgba(197,165,90,0.45)] hover:bg-[rgba(197,165,90,0.06)]",
        ].join(" ")}
      >
        <div className="flex items-start gap-3">
          {/* Radio dot */}
          <span
            className={[
              "mt-[3px] shrink-0 w-[14px] h-[14px] rounded-full border-2 flex items-center justify-center transition-all duration-150",
              selected
                ? "border-[#C5A55A] bg-[#C5A55A]"
                : "border-[rgba(197,165,90,0.35)] bg-transparent",
            ].join(" ")}
            aria-hidden="true"
          >
            {selected && <span className="w-[5px] h-[5px] rounded-full bg-[#0A1628]" />}
          </span>
          <div>
            <p className={[
              "font-body text-[14px] leading-snug transition-colors",
              selected ? "text-[#F5F0E8]" : "text-[rgba(245,240,232,0.8)]",
            ].join(" ")}>
              {opt.label}
            </p>
            <p className="font-mono text-[11px] text-[rgba(245,240,232,0.4)] mt-0.5 leading-snug">
              {opt.detail}
            </p>
          </div>
        </div>
      </motion.button>
    );
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="w-full max-w-xl mx-auto">

      {/* Progress bar */}
      {step !== "success" && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.5)]">
              {t("progress.label")} {stepIndex + 1} {t("progress.of")} {t("progress.total")}
            </span>
            {step !== "q0" && (
              <button
                onClick={goBack}
                className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.35)] hover:text-[rgba(245,240,232,0.65)] transition-colors"
              >
                {t("nav.back")} ←
              </button>
            )}
          </div>
          <div className="h-px bg-[rgba(197,165,90,0.15)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#C5A55A] rounded-full"
              initial={false}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>
      )}

      {/* Slide area */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>

          {/* ── Questions q0 / q1 / q2 ── */}
          {(step === "q0" || step === "q1" || step === "q2") && (
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h2 className="font-display font-bold text-[1.35rem] lg:text-[1.5rem] leading-snug text-[#F5F0E8] mb-2">
                {questions[step].question}
              </h2>
              <GoldRule width="sm" opacity={25} className="mb-6" />

              <div className={[
                "grid gap-3",
                step === "q0" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2",
              ].join(" ")}>
                {questions[step].options.map((opt) => {
                  const qKey = step as "q0" | "q1" | "q2";
                  const nextStep: Step = step === "q0" ? "q1" : step === "q1" ? "q2" : "contact";
                  return (
                    <OptionCard
                      key={opt.value}
                      opt={opt}
                      selected={pendingAnswer === opt.value || answers[qKey] === opt.value}
                      onClick={() => handleAnswer(qKey, opt.value, nextStep)}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* ── Contact step ── */}
          {step === "contact" && (
            <motion.div
              key="contact"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <h2 className="font-display font-bold text-[1.35rem] lg:text-[1.5rem] leading-snug text-[#F5F0E8] mb-1">
                {t("contact.heading")}
              </h2>
              <p className="font-body text-[13px] text-[rgba(245,240,232,0.5)] mb-2 leading-relaxed">
                {t("contact.subheading")}
              </p>
              <GoldRule width="sm" opacity={25} className="mb-6" />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.6)] mb-1.5">
                      {t("contact.name")} *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(197,165,90,0.2)] rounded-[3px] px-4 py-3 font-body text-[14px] text-[#F5F0E8] placeholder-[rgba(245,240,232,0.25)] focus:outline-none focus:border-[#C5A55A] transition-colors"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.6)] mb-1.5">
                      {t("contact.email")} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                      className={[
                        "w-full bg-[rgba(255,255,255,0.04)] border rounded-[3px] px-4 py-3 font-body text-[14px] text-[#F5F0E8] placeholder-[rgba(245,240,232,0.25)] focus:outline-none transition-colors",
                        emailError
                          ? "border-red-400 focus:border-red-400"
                          : "border-[rgba(197,165,90,0.2)] focus:border-[#C5A55A]",
                      ].join(" ")}
                    />
                    {emailError && (
                      <p className="font-mono text-[10px] text-red-400 mt-1">{emailError}</p>
                    )}
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(197,165,90,0.6)] mb-1.5">
                    {t("contact.note")}
                  </label>
                  <textarea
                    rows={3}
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={t("contact.notePlaceholder")}
                    className="w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(197,165,90,0.2)] rounded-[3px] px-4 py-3 font-body text-[14px] text-[#F5F0E8] placeholder-[rgba(245,240,232,0.25)] focus:outline-none focus:border-[#C5A55A] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || !name || !email}
                  className="w-full bg-[#C5A55A] hover:bg-[#D4AF37] disabled:opacity-40 disabled:cursor-not-allowed text-[#0A1628] font-display font-bold text-[15px] py-3.5 rounded-[3px] transition-all duration-200 hover:shadow-[0_0_24px_rgba(197,165,90,0.3)]"
                >
                  {submitting ? t("contact.submitting") : t("contact.submit")}
                </button>

                <p className="font-mono text-[10px] text-[rgba(245,240,232,0.3)] text-center leading-relaxed">
                  {t("contact.privacy")}
                </p>
              </form>
            </motion.div>
          )}

          {/* ── Success / Result ── */}
          {step === "success" && (
            <motion.div
              key="success"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              {/* Result card */}
              <div className="bg-[#1B2A4A] border border-[rgba(197,165,90,0.3)] rounded-[3px] p-6 mb-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#C5A55A] mb-3">
                  {result.eyebrow}
                </p>
                <h2 className="font-display font-bold text-[1.3rem] text-[#F5F0E8] mb-3 leading-snug">
                  {result.heading}
                </h2>
                <GoldRule width="full" opacity={20} className="mb-4" />
                <p className="font-body text-[14px] leading-[1.8] text-[rgba(245,240,232,0.7)] mb-6">
                  {result.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button href={hrefs.primary} variant="primary" size="md" className="flex-1 justify-center">
                    {result.cta}
                  </Button>
                  <Button href={hrefs.secondary} variant="secondary" size="md" className="flex-1 justify-center">
                    {result.secondary}
                  </Button>
                </div>
              </div>

              {/* Monday note */}
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(245,240,232,0.3)] text-center mb-5">
                {t("success.mondayNote")}
              </p>

              {/* Restart */}
              <div className="text-center">
                <button
                  onClick={restart}
                  className="font-mono text-[10px] uppercase tracking-[0.1em] text-[rgba(245,240,232,0.3)] hover:text-[rgba(197,165,90,0.6)] transition-colors"
                >
                  ← {t("success.restartLabel")}
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
