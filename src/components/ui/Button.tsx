'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export default function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      'bg-primary hover:bg-primary-hover text-white font-medium shadow-lg shadow-primary/20 border border-primary/30 active:scale-[0.98]',
    secondary:
      'bg-elevated hover:bg-surface text-foreground border border-border hover:border-primary/40 active:scale-[0.98]',
    outline:
      'bg-surface hover:bg-elevated text-foreground border border-border hover:border-primary/50 active:scale-[0.98] shadow-sm',
    ghost:
      'bg-transparent hover:bg-elevated text-muted-foreground hover:text-foreground active:scale-[0.98]',
    glow:
      'relative bg-gradient-to-r from-copper-500 via-copper-600 to-copper-500 hover:from-copper-600 hover:to-copper-500 text-white font-medium shadow-[0_0_25px_rgba(194,122,69,0.35)] border border-primary/40 hover:shadow-[0_0_35px_rgba(194,122,69,0.5)] active:scale-[0.98]',
  };

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 rounded-xl gap-1.5',
    md: 'text-sm px-5 py-2.5 rounded-2xl gap-2',
    lg: 'text-base px-6 py-3 rounded-2xl gap-2.5',
  };

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        'inline-flex items-center justify-center transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          <span>{children}</span>
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </motion.button>
  );
}
