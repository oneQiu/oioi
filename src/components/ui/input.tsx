import * as React from 'react';
import { cn } from '@/lib/utils';
import { Fragment } from 'react';

interface InputProps extends Omit<React.ComponentProps<'input'>, 'size'> {
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startAdornment, endAdornment, size = 'small', ...props }, ref) => {
    return (
      <Fragment>
        {startAdornment && startAdornment}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-xs placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
            className,
            {
              'h-11 placeholder:text-sm': size === 'medium',
              'h-13 placeholder:text-sm': size === 'large',
            },
          )}
          ref={ref}
          {...props}
        />
        {endAdornment && endAdornment}
      </Fragment>
    );
  },
);
Input.displayName = 'Input';

export { Input };
