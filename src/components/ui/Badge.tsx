'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export default function Badge({
  children,
  className,
  variant = 'primary',
  size = 'md',
  icon,
  ...props
}: BadgeProps) {
  const variantStyles = {
    primary:
      'bg-primary/10 text-primary border-primary/30 hover:border-primary/50 shadow-[0_0_12px_rgba(194,122,69,0.12)]',
    secondary:
      'bg-elevated text-foreground/80 border-border hover:border-primary/30',
    outline:
      'bg-transparent text-foreground/80 border-border hover:border-primary/40',
    accent:
      'bg-primary/15 text-primary border-primary/30 shadow-[0_0_12px_rgba(216,155,101,0.12)]',
    success:
      'bg-[#3EA27A]/10 text-[#3EA27A] border-[#3EA27A]/30 shadow-[0_0_12px_rgba(62,162,122,0.15)]',
    warning:
      'bg-[#D7A23B]/10 text-[#D7A23B] border-[#D7A23B]/30 shadow-[0_0_12px_rgba(215,162,59,0.15)]',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5 font-mono gap-1',
    md: 'text-xs px-3 py-1 font-mono gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 font-mono gap-2',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center justify-center font-medium rounded-full border backdrop-blur-md transition-colors',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
