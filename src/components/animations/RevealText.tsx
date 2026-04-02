"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface RevealTextProps {
  text: string;
  type?: "words" | "chars";
  stagger?: number;
  delay?: number;
  className?: string;
  wordClassName?: string;
}

export function RevealText({ text, type = "words", stagger = 0.06, delay = 0, className, wordClassName }: RevealTextProps) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const units = type === "words" ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={className} aria-label={text}>
      {units.map((unit, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + i * stagger, ease: "easeOut" }}
          className={`inline-block ${type === "words" ? "mr-[0.25em]" : ""} ${wordClassName ?? ""}`}
          aria-hidden="true"
        >
          {unit}
        </motion.span>
      ))}
    </span>
  );
}
