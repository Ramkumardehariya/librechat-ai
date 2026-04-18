import React from 'react';
import { cn } from '~/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'destructive' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    const baseStyles = 'inline-flex items-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';
    
    const variants = {
      default: 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100',
      primary: 'bg-brand-purple text-white',
      secondary: 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100',
      success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
      destructive: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      outline: 'border border-gray-300 text-gray-900 dark:border-gray-600 dark:text-gray-100',
    };

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-0.5 text-sm',
      lg: 'px-3 py-1 text-sm',
    };

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
