import React from 'react';
import { cn } from '~/utils';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fallback?: string;
  status?: 'online' | 'offline' | 'away' | 'busy';
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, size = 'md', fallback, status, ...props }, ref) => {
    const sizeStyles = {
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
      xl: 'h-16 w-16 text-xl',
    };

    const statusColors = {
      online: 'bg-green-500',
      offline: 'bg-gray-400',
      away: 'bg-amber-500',
      busy: 'bg-red-500',
    };

    const statusSizes = {
      sm: 'h-2 w-2',
      md: 'h-2.5 w-2.5',
      lg: 'h-3 w-3',
      xl: 'h-4 w-4',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex shrink-0 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800',
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {src ? (
          <img
            className="h-full w-full rounded-full object-cover"
            src={src}
            alt={alt || 'Avatar'}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.textContent = fallback || '?';
              }
            }}
          />
        ) : (
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {fallback || '?'}
          </span>
        )}
        {status && (
          <span
            className={cn(
              'absolute -bottom-0 -right-0 rounded-full border-2 border-white dark:border-gray-900',
              statusColors[status],
              statusSizes[size]
            )}
          />
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
