'use client';

import { useState } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface InfoTooltipProps {
  content: string;
  children?: React.ReactNode;
}

export default function InfoTooltip({ content, children }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="relative inline-flex items-center">
      <div
        className="inline-flex items-center group relative"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={() => setIsVisible(!isVisible)}
        aria-describedby={isVisible ? tooltipId : undefined}
      >
        {children}
        <FaInfoCircle 
          className="ml-2 text-indigo-400 hover:text-indigo-600 transition-colors cursor-pointer" 
          size={16} 
          aria-label="More information"
        />
      </div>
      {isVisible && (
        <div 
          id={tooltipId}
          role="tooltip"
          className="absolute z-10 w-80 p-3 mt-2 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-lg -left-1/2 transform translate-x-1/4"
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-t border-l border-gray-200"></div>
          <p className="text-gray-700">{content}</p>
        </div>
      )}
    </div>
  );
}
