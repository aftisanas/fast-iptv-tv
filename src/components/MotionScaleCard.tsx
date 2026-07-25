"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionScaleCardProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
}

export default function MotionScaleCard({
  children,
  className,
  delay,
}: MotionScaleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -8, scale: 1.05 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
