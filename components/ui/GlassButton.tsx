'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  asChild?: boolean;
}

export const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ children, className, variant = 'primary', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          variant === 'primary' && "btn-primary",
          variant === 'secondary' && "btn-secondary",
          variant === 'ghost' && "btn-ghost",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
GlassButton.displayName = "GlassButton";
