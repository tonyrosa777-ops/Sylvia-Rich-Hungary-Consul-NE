"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  threshold?: number;
  className?: string;
}

export function StaggerContainer({ children, staggerDelay = 0.1, initialDelay = 0, threshold = 0.15, className }: StaggerContainerProps) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: initialDelay,
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Use inside StaggerContainer for each child
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};
