"use client";

import { motion } from "framer-motion";
import type { ReactNode, ElementType } from "react";

interface MotionFadeInProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly as?: "div" | "p" | "span";
  readonly y?: number;
  readonly x?: number;
  readonly delay?: number;
  readonly duration?: number;
}

export default function MotionFadeIn({
  children,
  className,
  as = "div",
  y = 20,
  x = 0,
  delay,
  duration,
}: MotionFadeInProps) {
  const Tag = motion[as] as ElementType;
  return (
    <Tag
      initial={{ opacity: 0, y, x }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </Tag>
  );
}
