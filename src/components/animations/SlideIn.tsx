"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  className?: string;
}

export function SlideIn({ children, direction = "left", delay = 0, duration = 0.7, distance = 48, threshold = 0.2, className }: SlideInProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });
  const xInitial = direction === "left" ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xInitial }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
