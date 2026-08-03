'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children?: React.ReactNode;
  hoverGlow?: boolean;
  bordered?: boolean;
}

export default function Card({
  children,
  className,
  hoverGlow = true,
  bordered = true,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hoverGlow ? { y: -3 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={cn(
        'relative rounded-3xl bg-surface/85 backdrop-blur-xl transition-all duration-300 text-foreground',
        bordered && 'border border-border',
        hoverGlow &&
          'hover:border-primary/40 hover:shadow-[0_14px_40px_rgba(0,0,0,0.12),0_0_20px_rgba(194,122,69,0.15)] dark:hover:shadow-[0_14px_40px_rgba(0,0,0,0.6),0_0_20px_rgba(194,122,69,0.15)]',
        'shadow-md dark:shadow-[0_12px_36px_0_rgba(0,0,0,0.4)] light:shadow-[0_6px_24px_0_rgba(0,0,0,0.06)]',
        className
      )}
      {...props}
    >
      {/* Subtle top inner highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-t-3xl" />
      {children}
    </motion.div>
  );
}
