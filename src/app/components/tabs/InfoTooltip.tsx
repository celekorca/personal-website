'use client';

import { useState, useRef, useEffect, useId } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface InfoTooltipProps {
  content: string;
  children?: React.ReactNode;
}

export default function InfoTooltip({ content, children }: InfoTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipId = `tooltip-${useId().replace(/:/g, '')}`;

  // Close tooltip when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        triggerRef.current && 
        !triggerRef.current.contains(event.target as Node) &&
        tooltipRef.current && 
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    }

    // Add event listener when tooltip is visible
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative inline-flex items-center">
      <div
        ref={triggerRef}
        className="inline-flex items-center group relative"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={handleTriggerClick}
        aria-describedby={isVisible ? tooltipId : undefined}
      >
        {children}
        <FaInfoCircle
          className="ml-2 text-indigo-400 hover:text-indigo-600 transition-colors cursor-pointer"
          size={16}
          aria-label="More information"
        />
      </div>
      <div
        ref={tooltipRef}
        id={tooltipId}
        role="tooltip"
        className={`absolute z-50 w-80 p-4 text-sm text-gray-700 bg-white border border-gray-200 rounded-lg shadow-lg transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } left-full ml-3 top-1/2 transform -translate-y-1/2`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 rotate-45 bg-white border-l border-t border-gray-200"></div>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}
