'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hover = true, glass = false }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'rounded-xl p-6 border border-border bg-card text-card-foreground',
          glass && 'glass',
          hover && 'hover:border-primary-500/50 transition-all duration-300',
          className
        )}
        whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' } : {}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
