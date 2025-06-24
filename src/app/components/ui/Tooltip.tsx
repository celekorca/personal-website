'use client';

import { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export default function Tooltip({ 
  content, 
  children, 
  position = 'top',
  className = '' 
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        className="inline-block"
        role="tooltip"
      >
        {children}
      </div>
      {isVisible && (
        <div 
          className={`
            absolute z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm 
            whitespace-normal max-w-xs ${positionClasses[position]} ${className}
            before:absolute before:border-4 before:border-transparent
            ${position === 'top' ? 'before:top-full before:left-1/2 before:-translate-x-1/2 before:border-t-gray-900' : ''}
            ${position === 'bottom' ? 'before:bottom-full before:left-1/2 before:-translate-x-1/2 before:border-b-gray-900' : ''}
            ${position === 'left' ? 'before:left-full before:top-1/2 before:-translate-y-1/2 before:border-l-gray-900' : ''}
            ${position === 'right' ? 'before:right-full before:top-1/2 before:-translate-y-1/2 before:border-r-gray-900' : ''}
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
}
