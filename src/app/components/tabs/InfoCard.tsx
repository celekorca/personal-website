import React from 'react';
import { InfoCardProps } from './types/project.types';

/**
 * Reusable InfoCard component for displaying information in a consistent card layout
 */
const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  borderColor,
  icon,
  children,
}) => {
  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg p-6 border-l-4 ${borderColor} transition-all duration-300 hover:shadow-xl`}
    >
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-navy-800 ml-3">{title}</h3>
      </div>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      {children}
    </div>
  );
};

export default InfoCard;
