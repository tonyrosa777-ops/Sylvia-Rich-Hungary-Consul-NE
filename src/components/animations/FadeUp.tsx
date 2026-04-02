"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, duration = 0.6, distance = 24, threshold = 0.2, className }: FadeUpProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: distance }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
