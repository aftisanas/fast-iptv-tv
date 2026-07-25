"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionScaleInProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly initialScale?: number;
  readonly delay?: number;
}

export default function MotionScaleIn({
  children,
  className,
  initialScale = 0.9,
  delay,
}: MotionScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
