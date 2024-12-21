import React from 'react';
import clsx from 'clsx';

interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
  position?: 'start' | 'middle' | 'end'; // Position of children
  thickness?: string; // Accepts Tailwind’s class values, e.g., "1px" or "2px"
  color?: string; // Tailwind color class, e.g., "border-gray-300"
  margin?: string; // Margin utility classes, e.g., "my-4", "mx-2"
  className?: string; // For additional custom styles
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  children,
  position = 'middle',
  thickness = '1px',
  color = 'border-gray-300',
  margin = 'my-4',
  className,
}) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <div className={clsx(isHorizontal ? 'flex items-center' : 'flex', margin, className)}>
      {position === 'start' && children && (
        <span className="text-sm text-gray-600">{children}</span>
      )}
      <div
        className={clsx(
          isHorizontal ? 'flex-1 border-t' : 'h-full border-l',
          thickness && `border-[${thickness}]`,
          color,
          position === 'middle' && children && 'relative',
        )}
      >
        {position === 'middle' && children && (
          <span
            className={clsx(
              'absolute',
              isHorizontal
                ? '-top-2 left-1/2 -translate-x-1/2'
                : '-left-2 top-1/2 -translate-y-1/2',
              'bg-white px-2 text-sm text-gray-600',
            )}
          >
            {children}
          </span>
        )}
      </div>
      {position === 'end' && children && <span className="text-sm text-gray-600">{children}</span>}
    </div>
  );
};
