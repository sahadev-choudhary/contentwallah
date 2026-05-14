'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'heavy';
}

export function GlassCard({ children, className, intensity = 'medium', ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-panel",
        intensity === 'light' && "backdrop-blur-md bg-white/20",
        intensity === 'medium' && "backdrop-blur-xl bg-white/40",
        intensity === 'heavy' && "backdrop-blur-2xl bg-white/60",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
