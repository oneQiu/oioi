import React from 'react';
import clsx from 'clsx';

interface SpaceProps {
  direction?: 'horizontal' | 'vertical';
  gap?: number; // TailwindCSS gap value
  className?: string;
  children: React.ReactNode;
}

export const Space: React.FC<SpaceProps> = ({
  direction = 'horizontal',
  gap = 4,
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        'flex',
        'justify-center',
        direction === 'vertical' ? 'flex-col' : 'flex-row',
        `gap-${gap}`,
        className,
      )}
    >
      {children}
    </div>
  );
};
