import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { cn } from '~/utils';

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
}

const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <RadixTooltip.Provider delayDuration={250}>
    {children}
  </RadixTooltip.Provider>
);

const Tooltip = React.forwardRef<
  React.ElementRef<typeof RadixTooltip.Content>,
  TooltipProps
>(({ children, content, side = 'top', align = 'center', delayDuration }, ref) => {
  return (
    <RadixTooltip.Root delayDuration={delayDuration}>
      <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content
          ref={ref}
          side={side}
          align={align}
          className={cn(
            'z-50 overflow-hidden rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100',
            'max-w-xs'
          )}
        >
          {content}
          <RadixTooltip.Arrow className="fill-white dark:fill-gray-800" />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  );
});

Tooltip.displayName = 'Tooltip';

export { TooltipProvider, Tooltip };
