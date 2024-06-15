import { ReactNode } from 'react';

interface GridProps {
  columns: number;
  gap: number;
  className?: string;
  children: ReactNode;
}

const Grid = ({ columns, gap, className = '', children }: GridProps) => {
  const gridStyles = `grid grid-cols-${columns} gap-${gap} ${className}`;

  return (
    <div className={gridStyles}>
      {children}
    </div>
  );
}

export default Grid;
