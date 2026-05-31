'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ProgressBarProps {
  label: string;
  level: number;
  className?: string;
}

export const ProgressBar = ({ label, level, className }: ProgressBarProps) => {
  return (
    <div className={cn('mb-4', className)}>
      <div className="flex justify-between mb-2">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-3 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  );
};
