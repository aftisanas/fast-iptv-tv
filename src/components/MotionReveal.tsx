"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionRevealProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly y?: number;
  readonly delay?: number;
  readonly duration?: number;
}

export default function MotionReveal({
  children,
  className,
  y = 20,
  delay,
  duration,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
